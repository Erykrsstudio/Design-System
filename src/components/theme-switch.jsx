"use client";

import { useEffect, useState } from "react";

import { Switch } from "@/components/ui/switch";

export function ThemeSwitch() {
  const [isDark, setIsDark] = useState(false);
  const [isContextPrimary, setIsContextPrimary] = useState(false);

  useEffect(() => {
    const hasDarkClass = document.documentElement.classList.contains("dark");
    const hasContextPrimaryClass =
      document.documentElement.classList.contains("context-primary");
    setIsDark(hasDarkClass);
    setIsContextPrimary(hasContextPrimaryClass);
  }, []);

  function handleThemeChange(checked) {
    setIsDark(checked);
    document.documentElement.classList.toggle("context-dark", checked);
  }

  function handleContextPrimaryChange(checked) {
    setIsContextPrimary(checked);
    document.documentElement.classList.toggle("context-primary", checked);
  }

  return (
    <div className="flex flex-col items-center gap-3 sm:items-start">
      <div className="flex items-center gap-3">
        <span className="text-sm text-muted-foreground">Dark mode</span>
        <Switch checked={isDark} onCheckedChange={handleThemeChange} />
      </div>
    </div>
  );
}
