import React from "react";
import { ThemeProvider as StyleThemeProvider } from "styled-components";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";
import Layout from "./components/Layout";
import GlobalStyle from "./styles/global";
import themes from "./styles/themes";

class App extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ theme }) => (
            <StyleThemeProvider theme={themes[theme] || themes.dark}>
              <GlobalStyle />
              <Layout />
            </StyleThemeProvider>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );
  }
}
export default App;
// 1 - forma de criar estado dentro do react
// state = {
//   theme: "dark",
// };

// handleToggleTheme = () => {
//   this.setState((prevState) => ({
//     theme: prevState.theme === "dark" ? "light" : "dark",
//   }));
// };

// o metodo render deve sempre renderizar apenas os componentes, funcoes e logica deve ficar fora

// function App() {
//   const [theme, setTheme] = useState(() => {
//     const savedTheme = localStorage.getItem("theme");
//     return JSON.parse(savedTheme) || "dark";
//   });

//   const currentTheme = useMemo(() => {
//     return themes[theme] || themes.dark;
//   }, [theme]);

//   function handleToggleTheme() {
//     setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
//   }

//   useEffect(() => {
//     localStorage.setItem("theme", JSON.stringify(theme));
//   }, [theme]);

//   return (
//     <ContextTheme.Provider value={{ handleToggleTheme }}>
//       <ThemeProvider theme={currentTheme}>
//         <GlobalStyle />
//         <Layout themeValue={theme}/>
//       </ThemeProvider>
//     </ContextTheme.Provider>
//   );
// }
