import React, { useContext } from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import { ThemeContext } from "../../context/ThemeContext";
import Title from "../Title";

export default function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <Title>{props.title}</Title>
      <Button onClick={onToggleTheme}>Change Theme</Button>
      {props.children}
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Header.defaultProps = {
  title: "'GHm's Blog",
};
