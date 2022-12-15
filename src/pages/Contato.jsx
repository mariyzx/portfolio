import React from 'react';
import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

class Contato extends React.Component {
  render() {
    return (
      <section id="contato">
       <h2>Contato</h2>
       <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail className="contact_option_icon" />
            <h4>Email</h4>
            <h5>marinhomariana8@gmail.com</h5>
            <a href="mailto:marinhomariana8@gmail.com" target="_blank" rel="noreferrer">Enviar mensagem</a>
          </article>
          <article className="contact_option">
            <AiFillGithub className="contact_option_icon" />
            <h4>GitHub</h4>
            <h5>mariyzx</h5>
            <a href="https://github.com/mariyzx" target="_blank" rel="noreferrer">Enviar mensagem</a>
          </article>
          <article className="contact_option">
            <AiFillLinkedin className="contact_option_icon" />
            <h4>LinkedIn</h4>
            <h5>marinhomariana8</h5>
            <a href="https://www.linkedin.com/in/marinhomariana8/" target="_blank" rel="noreferrer">Enviar mensagem</a>
          </article>
        </div>
        {/* <form action="https://formsubmit.co/6017a703556f84b48d26de2cc13ee0ae" method="POST">
          <input type="text" name="name" placeholder="Nome Completo" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="mensagem" rows="7" placeholder="Sua mensagem" required></textarea>
          <button type="submit" className="btn btn-primary">Enviar mensagem</button>
        </form> */}
       </div>
      </section>
    )
  }
}

export default Contato;
