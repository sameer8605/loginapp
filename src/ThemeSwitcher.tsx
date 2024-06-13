
import React from 'react';
//import { useTheme } from './ThemeContext';
import { Button } from 'react-bootstrap';
import { useTheme } from './ThemeContext';

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="mb-3">
      <Button variant="secondary" onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </Button>
    </div>
  );
};

export default ThemeSwitcher;
