import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  themeChange: () => {},
})

export default ThemeContext
