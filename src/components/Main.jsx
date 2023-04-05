import React from "react";
import { MainTitle } from "../styles/components/Title";

class Main extends React.Component {
  render() {
    return (
      <MainTitle>
        <span>
          <h1>Mariana Werneck</h1>
          <h2>Front-end developer</h2>
        </span>
        <a href="/#contato" className="btn btn-primary">Vamos conversar ✉</a>
      </MainTitle>
    );
  }
}

export default Main;
