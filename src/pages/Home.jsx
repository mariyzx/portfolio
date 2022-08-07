import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Contato from "./Contato";
import Projetos from "./Projetos";
import SobreMim from "./SobreMim";

class Home extends React.Component {
  render() {
    return (
    <div id="home">
      <Header />
      <Main />
      <SobreMim />
      <Projetos />
      <Contato />
    </div>
    )
  }
}

export default Home;