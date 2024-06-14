"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Moon } from "@/components/icons/moon";
import { Sun } from "@/components/icons/sun";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div>
      {theme === 'light' ? (
        <Button variant="outline" size="icon" onClick={() => setTheme('dark')}> <Moon /> </Button>
      ) : (
        <Button variant="outline" size="icon" onClick={() => setTheme('light')}> <Sun /> </Button>
      )}
    </div>
  );
}

export default ThemeSwitcher;
