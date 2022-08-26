import React from 'react';

export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

export const ThemeContext = React.createContext({
  toggleTheme: () => {},
  theme: themes.dark // 默认值
});

ThemeContext.displayName = 'ThemeContext:)';