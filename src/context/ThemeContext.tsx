import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext(false)

function ThemeProvider ({children}) {
  const [theme, setTheme] = useState('')

  useEffect(() => {
    const localT = localStorage.getItem('theme')     
    setTheme(localT === 'dark' ? 'dark' : 'light')
    console.log(localT);
  }, [])

  console.log("theme", theme);
  
  const toggleTheme = (str: string) => {
    setTheme(str)
    localStorage.setItem('theme', str)
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

const useTheme = () => useContext(ThemeContext)

export { ThemeProvider, useTheme }
