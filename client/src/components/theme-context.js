import React from "react";

export const themes = {
  base: {
    background: 'darkgrey',
  },
  tan: {
    background: 'tan',
  },
  blue: {
    background: 'cornflowerblue',
  },
}

const ThemeContext = React.createContext(themes.dark)

export default ThemeContext;