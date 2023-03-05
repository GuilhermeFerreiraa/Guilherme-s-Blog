import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import { Container } from "./styles";

export default function Footer({ themeValue }) {
  const { handleToggleTheme } = useContext(ThemeContext);

  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button onClick={handleToggleTheme} type="button">
        {themeValue == "dark" ? "🌞" : "🌑"}
      </button>
    </Container>
  );
}
