
'use client';

import { Moon, Sun, Palette, Check } from 'lucide-react';
import type { Theme } from '@/context/theme-provider'; // Import type
import { useTheme } from '@/context/theme-provider';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';

const themeOptions: { name: string; value: Theme; icon: React.ElementType }[] = [
  { name: 'Light', value: 'light', icon: Sun },
  { name: 'Dark', value: 'dark', icon: Moon },
  { name: 'Blue', value: 'blue', icon: Palette },
  { name: 'Green', value: 'green', icon: Palette },
  { name: 'Red', value: 'red', icon: Palette },
  { name: 'Yellow', value: 'yellow', icon: Palette },
];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Toggle theme">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          {/* Fallback or combined icon for other themes if Sun/Moon doesn't fit */}
           <Palette className={`h-[1.2rem] w-[1.2rem] transition-all ${theme !== 'light' && theme !== 'dark' ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-0 -rotate-90'} absolute`} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Select Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {themeOptions.map((opt) => (
          <DropdownMenuItem key={opt.value} onClick={() => setTheme(opt.value)}>
            <opt.icon className="mr-2 h-4 w-4" />
            <span>{opt.name}</span>
            {theme === opt.value && <Check className="ml-auto h-4 w-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
