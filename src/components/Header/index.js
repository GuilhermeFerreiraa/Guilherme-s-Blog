import React, { Component } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Container } from "./styles";
export default class Header extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, handleToggleTheme }) => (
          <Container>
            <h1>JStack's Blog</h1>
            <button onClick={handleToggleTheme} type="button">
              {theme == "dark" ? "🌞" : "🌑"}
            </button>
          </Container>
        )}
      </ThemeContext.Consumer>
    );
  }
}
// função da context API handleToggleTheme
// export default function Header({ onToggleTheme, themeValue }) {
//   const { handleToggleTheme } = useContext(ContextTheme)

//   return (
//     <Container>
//       <h1>JStack's Blog</h1>
//       <button onClick={handleToggleTheme} type="button">
//         {themeValue == 'dark' ? '🌞' : '🌑'}
//       </button>
//     </Container>
//   );
// }

// PROPS SÃO READ ONLY
