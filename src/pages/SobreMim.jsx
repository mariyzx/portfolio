import React from "react";
import { MainAbout } from "../styles/components/About";

class SobreMim extends React.Component {
  render() {
    return (
      <MainAbout>
        <h2>Sobre mim</h2>
        <article className="about_card">
          21 anos, carioca, atualmente aprendendo desenvolvimento back-end na Trybe!
          <br></br>
          Amo café, ficção científica, passar meu tempo livre jogando e aprender coisas novas!
          <br></br>
          Em busca da minha oportunidade como dev ♥
        </article>
        <a href="/#contato" className="btn btn-primary">Vamos conversar ✉</a>
      </MainAbout>
    )
  }
}

export default SobreMim;
