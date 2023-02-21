import React, { useContext } from "react";
import ContextTheme from "../../context/ContextTheme";

import { Container } from "./styles";

export default function Footer({ themeValue }) {
  const { handleToggleTheme } = useContext(ContextTheme);

  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button onClick={handleToggleTheme} type="button">
        {themeValue == "dark" ? "🌞" : "🌑"}
      </button>
    </Container>
  );
}
