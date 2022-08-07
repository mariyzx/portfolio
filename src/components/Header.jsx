import React from "react";

class Header extends React.Component {
 render() {
  return (
    <header>
      <div className="container header__container">
        <div>
          <h2>Mariana Werneck</h2>
          <h4>Portfolio Pessoal</h4>
        </div>
        <nav className="links-header">
          <ul>
            <li onClick={(e) => {e.preventDefault(); window.location.replace('/#home')}}>HOME</li>
            <li onClick={(e) => {e.preventDefault(); window.location.replace('/#projetos')}}>PROJETOS</li>
            <li onClick={(e) => {e.preventDefault(); window.location.replace('/#about')}}>SOBRE</li>
            <li onClick={(e) => {e.preventDefault(); window.location.replace('/#contato')}}>CONTATO</li>
          </ul>
        </nav>
      </div>
    </header>
  )
 }
}

export default Header;
