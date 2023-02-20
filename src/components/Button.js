import React, { useContext } from "react";
import PropTypes from "prop-types";

import { ThemeContext } from "../context/ThemeContext";

export default function Button(props) {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      style={{
        color: theme === "dark" ? "#000" : "#fff",
        backgroundColor: theme === "light" ? "#000" : "#fff",
        borderRadius: 10,
        borderWidth: 1,
        fontSize: 12,
      }}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
