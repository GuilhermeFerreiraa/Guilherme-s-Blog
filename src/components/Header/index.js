import React, { Component } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Container } from "./styles";

function HOC(ComponentHeader) {
  return class Component extends React.Component {
    render() {
      return (
        <ThemeContext.Consumer>
        {(value) => (
          <ComponentHeader {...value} />
        )}
      </ThemeContext.Consumer>
      );
    }
  };
}

class Header extends Component {

  // conseguimos monitorar as alteraçoes na contextAPI através da função componentDidUpdate, sendo renderizado os valores na função HOC
  componentDidUpdate(prevProps, prevState) {
    if(this.props.theme !== prevProps.theme){
      console.log('tema mudou...')
    }
  }

  
  render() {
    return (
      <Container>
      <h1>JStack's Blog</h1>
      <button onClick={this.props.handleToggleTheme} type="button">
        {this.props.theme == "dark" ? "🌞" : "🌑"}
      </button>
    </Container>
    );
  }
}

export default HOC(Header);