import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import { MainScreen } from "../styles/pages/MainScreen";
import Contato from "./Contato";
import Projetos from "./Projetos";
import SobreMim from "./SobreMim";
import Techs from "./Tech";

class Home extends React.Component {
  render() {
    return (
    <div>
      <MainScreen>
        <Header />
        <Main />
      </MainScreen>
      <SobreMim />
      <Techs />
      <Projetos />
      <Contato />
    </div>
    )
  }
}

export default Home;