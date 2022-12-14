import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import { MainSection } from "../styles/components/Main";
import Contato from "./Contato";
import Projetos from "./Projetos";
import SobreMim from "./SobreMim";

class Home extends React.Component {
  render() {
    return (
    <div>
      <Header />
      <MainSection>
        <Main />
        <SobreMim />
      </MainSection>
      <Projetos />
      <Contato />
    </div>
    )
  }
}

export default Home;