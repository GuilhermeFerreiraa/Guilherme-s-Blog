import React, { useEffect } from "react";
import { ThemeProvider as StyleThemeProvider } from "styled-components";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";
import Layout from "./components/Layout";
import GlobalStyle from "./styles/global";
import themes from "./styles/themes";

// componentDidMount mesma coisa do useEffect sem dependencias, só vai renderizar uma única vez
// componentDidUpdate = chamado depois do metodo render, e executado toda vez que tem uma atualização de estado na aplicação

class App extends React.Component {
  state = {
    changed: false,
  };

  // componentDidMount - executado na renderização da tela
  componentDidMount() {
    console.log("componentDidMount executed");
  }

  // componentDidUpdate - monitora as alterações, pegando as propriedades anteriores e as atuais, podendo fazer a comparação das alterações
  componentDidUpdate(prevProps, prevState) {
    console.log({
      currentState: this.state,
      prevState,
      prevProps,
    });
  }

  // componentDidCatch - serve para capturar os erros que ocorrem dentro do método render
  componentDidCatch(error, info) {
    console.log(error);
  }

  // shouldComponentUpdate - semelhante ao DidUpdate, é o único do lifecycle que deve retornar um valor booleano - O SHOULD COMPONENT É RENDERIZADO ANTES DA TELA SER MONTADA
  // nextProps - valores que vai receber
  // nextState - valor que o usuário está tentando atualizar
  shouldComponentUpdate(nextProps, nextState) {
    console.log({
      currentState: this.state,
      nextProps,
      nextState,
    });

    return true;
    // retornamos true se quisermos renderizar, se for falso impedimos a atualização do componente
  }

  // componentWillUnmount - componente será executado antes do componente sair da tela
  componentWillUnmount() {}

  render() {
    console.log("rendered");
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

// RENDER PROPS = passando as propriedades através das props da context renderizando por uma funcao
