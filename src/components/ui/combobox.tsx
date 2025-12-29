'use client';

import * as React from 'react';
import { Check } from 'lucide-react';

import { cn } from '~/libs/utils';
import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover';
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
  CommandLoading,
} from '~/components/ui/command';

// --- Interfaces ---

export interface Option {
  value: string;
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  details?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ibge?: any;
}

// --- Componentes ---

interface ComboboxRootProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const ComboboxRoot: React.FC<ComboboxRootProps> = ({ children, open: controlledOpen, onOpenChange: controlledOnOpenChange }) => {
  const [internalOpen, setInternalOpen] = React.useState(false);

  const open = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const setOpen = controlledOnOpenChange || setInternalOpen;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      {children}
    </Popover>
  );
};

const ComboboxTrigger: React.FC<React.ComponentPropsWithoutRef<typeof PopoverTrigger>> = ({ children, ...props }) => {
  return <PopoverTrigger className='overflow-hidden' {...props}>{children}</PopoverTrigger>;
};

interface ComboboxContentProps {
  children: React.ReactNode;
  shouldFilter?: boolean;
  className?: string;
  align?: "center" | "start" | "end";
}

const ComboboxContent: React.FC<ComboboxContentProps> = ({ children, shouldFilter, className, align = "start" }) => {
  return (
    <PopoverContent className={cn("w-[--radix-popover-trigger-width] p-0", className)} align={align}>
      <Command shouldFilter={shouldFilter}>{children}</Command>
    </PopoverContent>
  );
};

const ComboboxInput: React.FC<Omit<React.ComponentPropsWithoutRef<typeof CommandInput>, 'value'>> = ({ defaultValue, onValueChange, ...props }) => {
  const [value, setValue] = React.useState(defaultValue?.toString() || '');

  return (
    <CommandInput
      placeholder="Pesquisar..."
      {...props}
      value={value}
      onValueChange={(newValue) => {
        setValue(newValue);
        onValueChange?.(newValue);
      }}
    />
  );
};

interface ComboboxOptionsProps {
  children: React.ReactNode;
}

const ComboboxOptions: React.FC<ComboboxOptionsProps> = ({ children }) => {
  return <CommandList className="max-h-[280px] scrollbar-thin">{children}</CommandList>;
};

interface ComboboxOptionProps {
  option: Option;
  selected?: boolean;
  onSelect: (option: Option) => void;
  ibge?: string;
}

const ComboboxOption: React.FC<ComboboxOptionProps> = ({ option, selected, onSelect, ibge }) => {
  return (
    <CommandItem
      value={`${option.label} // ${option.value}`}
      data-ibge={ibge}
      onSelect={() => onSelect(option)}
      className='rounded-md my-0.5'
    >
      <Check className={cn('mr-2 h-4 w-4', selected ? 'opacity-100' : 'opacity-0')} />
      {option.label}
    </CommandItem>
  );
};

interface ComboboxLoadingProps {
  children: React.ReactNode;
}

const ComboboxLoading: React.FC<ComboboxLoadingProps> = ({ children }) => {
  return <CommandLoading>{children}</CommandLoading>;
};

interface ComboboxEmptyProps {
  children: React.ReactNode;
}

const ComboboxEmpty: React.FC<ComboboxEmptyProps> = ({ children }) => {
  return <CommandEmpty>{children}</CommandEmpty>;
};

export {
  ComboboxRoot,
  ComboboxTrigger,
  ComboboxContent,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
  ComboboxLoading,
  ComboboxEmpty,
};