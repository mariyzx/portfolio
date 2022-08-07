import React from "react";

class SobreMim extends React.Component {
  render() {
    return (
      <section id="about">
        <h2>Sobre mim</h2>

        <div className="container about_container">
          <div className="about_content">
            <div className="about_cards">
              <article className="about_card">
              Tenho 20 anos e sou da cidade de Nova Iguaçu, Rio de Janeiro - Brasil.
              Sempre tive interesse em ingressar na área de desenvolvimento mas algo sempre me impedia, em 2020 ingressei 
              na graduação em Matemática na Universidade Federal Rural do Rio de Janeiro, após alguns períodos percebi que
              devia focar na minha prioridade que era a programação. Em 2022 iniciei o curso de Desenvolvimento Web na Trybe
              e iniciei os estudos aprofundados sobre a área que é a minha paixão!
              </article>
              <a href="/#contato" className="btn btn-primary">Vamos conversar</a>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default SobreMim;
