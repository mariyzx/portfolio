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
              <h4><a href="mailto:marinhomariana8@gmail.com" target="_blank" rel="noreferrer">Email</a></h4>
            </article>
            <article>
              <AiFillGithub />
              <h4><a href="https://github.com/mariyzx" target="_blank" rel="noreferrer">GitHub</a></h4>
            </article>
            <article>
              <AiFillLinkedin />
              <h4> <a href="https://www.linkedin.com/in/marinhomariana8/" target="_blank" rel="noreferrer">LinkedIn</a></h4>
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
