import React from "react";
import { HeaderLinks, MainHeader } from "../styles/components/Header";

class Header extends React.Component {
 render() {
  return (
    <MainHeader>
        <nav className="links-header">
          <HeaderLinks>
            <li onClick={(e) => {e.preventDefault(); window.location.replace('/#home')}}>HOME</li>
            <li onClick={(e) => {e.preventDefault(); window.location.replace('/#stacks')}}>STACKS</li>
            <li onClick={(e) => {e.preventDefault(); window.location.replace('/#projetos')}}>PROJETOS</li>
            <li onClick={(e) => {e.preventDefault(); window.location.replace('/#contato')}}>CONTATO</li>
          </HeaderLinks>
        </nav>
    </MainHeader>
  )
 }
}

export default Header;
