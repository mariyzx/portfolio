import React from 'react';
import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { SiMinutemailer } from 'react-icons/si'
import Footer from '../components/Footer';
import { Button } from '../styles/components/Button';
import { DivContact, MainContact } from '../styles/pages/Contact';
import { Divider } from '../styles/components/Divider';

class Contato extends React.Component {
  render() {
    return (
      <MainContact id="contato">
        <Divider></Divider>
        <h2>Contato</h2>
        <div>
          <DivContact>
            <article>
              <AiOutlineMail />
              <h4>Email</h4>
              <h5>marinhomariana8@gmail.com</h5>
              <a href="mailto:marinhomariana8@gmail.com" target="_blank" rel="noreferrer">Enviar mensagem</a>
            </article>
            <article>
              <AiFillGithub />
              <h4>GitHub</h4>
              <h5>mariyzx</h5>
              <a href="https://github.com/mariyzx" target="_blank" rel="noreferrer">Enviar mensagem</a>
            </article>
            <article>
              <AiFillLinkedin />
              <h4>LinkedIn</h4>
              <h5>marinhomariana8</h5>
              <a href="https://www.linkedin.com/in/marinhomariana8/" target="_blank" rel="noreferrer">Enviar mensagem</a>
            </article>
          </DivContact>
          <form action="https://formsubmit.co/6017a703556f84b48d26de2cc13ee0ae" method="POST">
            Me envie uma mensagem :)
            <input type="text" name="name" placeholder="Nome Completo" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="text" name="mensagem" rows="7" placeholder="Sua mensagem" required></input>
            <Button type="submit"><SiMinutemailer /></Button>
          </form>
        </div>
        <Footer />
      </MainContact>
    )
  }
}

export default Contato;
