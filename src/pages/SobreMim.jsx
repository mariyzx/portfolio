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
              Tenho 21 anos e sou do Rio de Janeiro - Brasil.
              Sempre tive interesse em ingressar na área de Desenvolvimento, depois de um período na Matemática resolvi focar em programação,
              e foi a melhor escolha que eu poderia ter feito!
              Em 2022 iniciei o curso de Desenvolvimento Web na Trybe e aprofundei os estudos sobre a área que é a minha paixão!
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
