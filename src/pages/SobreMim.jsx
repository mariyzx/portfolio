import React from "react";
import { MainAbout } from "../styles/pages/About";

class SobreMim extends React.Component {
  render() {
    return (
      <MainAbout id="sobre">
        <h2>Sobre mim</h2>
        <div>
          <article className="about_card">
            Sou uma desenvolvedora Full-Stack localizada no Rio de Janeiro.<br></br>
            Formada em Desenvolvimento Web pela <a href='https://www.betrybe.com/' target="_blank" rel="noreferrer">Trybe </a>
            e cursando Matemática na UFRRJ.<br></br>
            <br></br>
            Pessoa bem organizada, solucionadora de problemas e com perfil autodidata. <br></br> 
            Apaixonada por jogos, filmes de ficção científica, música e literatura.
            <br></br>Interessada em todo o aspecto full-stack, desde a criação de banco de dados até interface de usuário.
            <br></br>Procuro trabalhar em projetos ambiciosos com pessoas positivas!
          </article>
        </div>
      </MainAbout>
    )
  }
}

export default SobreMim;
