import { useState, useEffect, type ReactNode } from "react";
import { createContext } from "react";

export const ThemeContext = createContext<{ theme: string, toggleTheme: () => void }>({
  theme: 'light',
  toggleTheme: function (): void {
    return;
  }
});


export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme
    = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}