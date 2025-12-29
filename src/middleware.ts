import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

import { formattedDate } from './libs/node-utils';
import { getAllPages } from '~/libs/pages';
import { DEFAULT_AUTH_PAGE_URL } from './libs/constants';

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/_next/')) return NextResponse.next();

  const paths = getAllPages();
  const { pathname } = request.nextUrl;

  const path = paths.find(({ regex }) => regex?.test(pathname));

  //
  if (!path && pathname !== '/') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (!path || !path.auth) {
    return NextResponse.next();
  }

  const token = request.cookies.get('token') || request.cookies.get('n_token');
  let isAuthenticated = false;

  if (token) {
    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
      const rawToken = token.value.replace(/^Bearer\s+/i, '');
      const { payload } = await jwtVerify(rawToken, secret);
      console.log(`[${formattedDate(new Date())}](middleware) User ID: ${payload.sub} expires in ${payload.exp}`);
      isAuthenticated = true;
    } catch (error: unknown) {
      isAuthenticated = false;
      console.error(error);
    }
  }

  if (pathname === '/') {
    const target = isAuthenticated ? DEFAULT_AUTH_PAGE_URL : '/';
    return NextResponse.redirect(new URL(target, request.url));
  }

  if (path.auth && isAuthenticated) {
    return NextResponse.next();
  }

  if (path.auth && !isAuthenticated) {
    const signInUrl = new URL('/', request.url);

    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
}
