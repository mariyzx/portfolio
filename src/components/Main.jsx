import React from "react";
import mari from '../imgs/mari.PNG';

class Main extends React.Component {
  render() {
    return (
      <section className="main-content">
        <img src={mari} width={240} className="avatar" />
        <h1 className="hello blink-cursor">Olá, sou Mariana Werneck</h1>
        <h2>Front-end developer</h2>
      </section>
    );
  }
}

export default Main;
