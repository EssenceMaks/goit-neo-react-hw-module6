import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import css from './ThemeToggle.module.css';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className={css.themeToggle}>
      {isDark ? <FaSun className={css.icon} /> : <FaMoon className={css.icon} />}
    </button>
  );
};

export default ThemeToggle; 