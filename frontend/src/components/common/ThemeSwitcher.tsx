"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="">
      {currentTheme === "dark" ? (
        <MdLightMode
          onClick={() => setTheme("light")}
          className="text-white cursor-pointer border border-tealGreen w-8 h-8 p-1 rounded-full transition-all duration-500 hover:text-amber-500 hover:bg-black"
        />
      ) : (
        <MdDarkMode
          onClick={() => setTheme("dark")}
          className="text-black bg-white cursor-pointer border border-tealGreen w-8 h-8 p-1 rounded-full transition-all duration-500 hover:text-amber-500 hover:bg-black"
        />
      )}
    </div>
  );
};

export default ThemeSwitcher;
