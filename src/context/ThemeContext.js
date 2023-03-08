import React, { createContext } from "react";

export const ThemeContext = createContext();

export class ThemeProvider extends React.Component {
  //constructor - executado quando a classe é instanciada
  constructor(props) {
    // super - executamos o método construtor da classe que estamos herdandno
    super(props);

    let theme = "dark";

    try {
      theme = JSON.parse(localStorage.getItem("theme"));
    } catch (err) {
      console.log(err);
    }

    this.state = {
      theme,
    };
  }

  // usamos para monitorar quando uma variável de classe mudou - semelhante á dependencia do useEffect(() => {},[theme])
  componentDidUpdate(prevPrrops, prevState) {
    if (prevState.theme !== this.state.theme) {
      localStorage.setItem("theme", JSON.stringify(this.state.theme));
    }
  }

  handleToggleTheme = () => {
    this.setState(
      (prevState) => ({
        theme: prevState.theme === "dark" ? "light" : "dark",
      }),
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          handleToggleTheme: this.handleToggleTheme,
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
