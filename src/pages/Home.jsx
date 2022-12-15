import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import { MainScreen } from "../styles/pages/MainScreen";
import Contato from "./Contato";
import Projetos from "./Projetos";
import SobreMim from "./SobreMim";

class Home extends React.Component {
  render() {
    return (
    <div>
      <MainScreen>
        <Header />
        <Main />
        <SobreMim />
      </MainScreen>
      <Projetos />
      <Contato />
    </div>
    )
  }
}

export default Home;