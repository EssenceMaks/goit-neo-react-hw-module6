import { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = window.localStorage.getItem('theme');
    // Возвращаем true если тема не сохранена или равна 'dark'
    return savedTheme === null ? true : savedTheme === 'dark';
  });

  useEffect(() => {
    // Сохраняем строку 'dark' или 'light' вместо булевого значения
    window.localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext); 