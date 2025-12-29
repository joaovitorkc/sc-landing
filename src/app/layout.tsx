import type { Metadata } from 'next';
import { Inter, Merriweather } from 'next/font/google';
import { Toaster } from '~/components/ui/sonner';

import './globals.css';
import { cn } from '~/libs/utils';
import { QueryClientProvider } from '~/providers/query-client-provider';
import { Setup } from '~/components/setup';

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontSerif = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: {
    template: '%s - Dr. Sebastião Cavalcanti',
    default: 'Dr. Sebastião Cavalcanti',
  },
  description: 'Uma Landing Page moderna e de alta conversão para escritórios de advocacia, focada em autoridade e elegância.',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <QueryClientProvider>
      <html lang="pt-BR">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          <link rel="icon" type="image/svg+xml" href="/svg/icon.svg" />
        </head>

        <body
          className={cn(
            'min-h-screen bg-background font-sans antialiased text-foreground/70',
            fontSans.variable,
            fontSerif.variable
          )}
        >
          <Setup />
          {children}
          <Toaster position="top-center" />
        </body>
      </html>
    </QueryClientProvider>

  );
};

export default RootLayout;