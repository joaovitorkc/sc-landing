'use client';

import { createContext, useContext, useMemo } from 'react';

import { cn } from '~/libs/utils';
import { Button } from './button';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

function getPortals({ page, totalPages }: { page: number; totalPages: number }) {
  const start = Math.max(1, page - 2);
  const end = Math.min(totalPages, page + 2);

  return Array.from({ length: end - start + 1 }, (_, i) => i + start);
}

interface ListContextType {
  cols: string;
}

const ListContext = createContext({} as ListContextType);

interface ListRootProps {
  children: React.ReactNode;
  cols: string;
}

const ListRoot: React.FC<ListRootProps> = ({ children, cols }) => {
  return <ListContext.Provider value={{ cols }}>{children}</ListContext.Provider>;
};

interface ListItemProps {
  children: React.ReactNode;
  className?: string;
}

interface ListContentProps {
  children: React.ReactNode;
  className?: string;
}

const ListContent: React.FC<ListContentProps> = ({ children, className }) => {
  return (
    <div className="flex flex-col w-screen -mx-6 overflow-x-auto sm:w-full sm:mx-0">
      <ul className={cn('w-max min-w-full', className)}>{children}</ul>
    </div>
  );
};

const ListHead: React.FC<ListItemProps> = ({ children, className }) => {
  const { cols } = useContext(ListContext);

  return (
    <li className={cn('py-2 grid gap-4 border-b text-sm px-2 text-foreground/70', cols, className)}>
      {children}
    </li>
  );
};

const ListItem: React.FC<ListItemProps> = ({ children, className }) => {
  const { cols } = useContext(ListContext);

  return (
    <li
      className={cn(
        'py-2 grid gap-4 border-b text-sm px-2 text-foreground transition-colors hover:bg-muted *:inline-flex *:items-center',
        cols,
        className
      )}
    >
      {children}
    </li>
  );
};

const ListItemEmpty: React.FC<{ className?: string, children?: React.ReactNode }> = ({ className, children }) => {
  const { cols } = useContext(ListContext);

  return (
    <li className={cn('py-2 grid gap-4 border-b text-sm px-2 bg-muted', cols, className)}>
      {children || <p className="text-transparent pointer-events-none select-none">.</p>}
    </li>
  );
};

interface ListFooterProps {
  className?: string;
  total?: number;
  page?: number;
  pages?: number;
  perPage?: number;
  onPageChange?: (page: number) => void;
}

const ListFooter: React.FC<ListFooterProps> = ({
  className,
  total,
  page,
  pages,
  perPage,
  onPageChange,
}) => {
  const hasNexPage = (page ?? 1) < (pages ?? 1);
  const hasPrevPage = (page ?? 1) > 1;

  const { dotsAfter, dotsBefore, portals, showFirst, showLast } = useMemo(() => {
    if (!page || !pages)
      return {
        portals: [],
        dotsBefore: false,
        dotsAfter: false,
        showFirst: false,
        showLast: false,
      };

    const portals: number[] = getPortals({ page, totalPages: pages });

    if (portals.length && portals[0] !== 1) {
      // portals.unshift('...');
    }

    if (portals.length && portals[portals.length - 1] !== pages) {
      // portals.push('...');
    }

    // if (portals.at(0) === '...') {
    //   portals.unshift(1);
    // }

    // if (portals.at(-1) === '...') {
    //   portals.push(pages);
    // }

    return {
      portals,
      dotsBefore: (portals.at(0) || 0) > 2,
      dotsAfter: (portals.at(-1) || 0) < pages - 1,
      showFirst: (portals.at(0) || 0) > 1,
      showLast: portals.at(-1) !== pages,
    };
  }, [page, pages]);

  return (
    <div className={cn('flex items-center mt-6 flex-col sm:flex-row', className)}>
      <p className="text-sm">
        Mostrando {perPage ?? '-'} registros de {total ?? '-'}
      </p>

      <div className="flex items-center gap-2 sm:ml-auto">
        <Button
          size="sm"
          variant="outline"
          onClick={() => onPageChange?.((page ?? 1) - 1)}
          disabled={!hasPrevPage}
        >
          <ChevronLeftIcon size={16} />
          <span>Anterior</span>
        </Button>

        {showFirst && (
          <Button size="sm" variant="outline" onClick={() => onPageChange?.(1)}>
            <span>{1}</span>
          </Button>
        )}

        {dotsBefore && (
          <Button size="sm" variant="ghost" disabled>
            <span>...</span>
          </Button>
        )}

        {portals
          .filter((portal) => typeof portal === 'number')
          .map((portal) => (
            <Button
              size="sm"
              key={portal}
              variant={portal === page ? 'ghost' : 'outline'}
              onClick={() => onPageChange?.(portal)}
              disabled={portal === page}
            >
              <span>{portal}</span>
            </Button>
          ))}

        {dotsAfter && (
          <Button size="sm" variant="ghost" disabled>
            <span>...</span>
          </Button>
        )}

        {showLast && (
          <Button size="sm" variant="outline" onClick={() => pages && onPageChange?.(pages)}>
            <span>{pages}</span>
          </Button>
        )}

        <Button
          size="sm"
          variant="outline"
          onClick={() => onPageChange?.((page ?? 1) + 1)}
          disabled={!hasNexPage}
        >
          <span>Próxima</span>
          <ChevronRightIcon size={16} />
        </Button>
      </div>
    </div>
  );
};

export { ListContent, ListFooter, ListHead, ListItem, ListItemEmpty, ListRoot };
