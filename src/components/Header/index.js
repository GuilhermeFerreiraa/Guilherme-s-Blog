import React, { useContext } from "react";
import ContextTheme from "../../context/ContextTheme";

import { Container } from "./styles";

export default function Header({ onToggleTheme, themeValue }) {
  const { handleToggleTheme } = useContext(ContextTheme)

  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button onClick={handleToggleTheme} type="button">
        {themeValue == 'dark' ? '🌞' : '🌑'}
      </button>
    </Container>
  );
}
