import React, { useEffect, useMemo, useState } from "react";
import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout";
import GlobalStyle from "./styles/global";
import themes from "./styles/themes";
import ContextTheme from "./context/ContextTheme";

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "dark";
  });

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
    localStorage.setItem("theme", theme);
  }

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ContextTheme.Provider value={{ handleToggleTheme }}>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <Layout themeValue={theme} onToggleTheme={handleToggleTheme} />
      </ThemeProvider>
    </ContextTheme.Provider>
  );
}

export default App;
