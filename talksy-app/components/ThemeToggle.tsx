'use client';

import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="glass-effect bg-transparent border-white/20 text-white hover:bg-white/10 fixed top-4 right-4 z-50"
    >
      {theme === 'aurora' ? (
        <Sun className="h-4 w-4 mr-2" />
      ) : (
        <Moon className="h-4 w-4 mr-2" />
      )}
      {theme === 'aurora' ? 'Liquid' : 'aurora'}
    </Button>
  );
}
