import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import SobreMim from './pages/SobreMim';
import Projetos from './pages/Projetos';
import Contato from './pages/Contato';
import Techs from './pages/Tech';

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" element={ <Home />} />
        <Route path="/stacks" element={ <Techs />} />
        <Route path="/projetos" element={ <Projetos />} />
        <Route path="/about" element={ <SobreMim />} />
        <Route path="/contato" element={ <Contato />} />
      </Routes>
    );
  }
}

export default App;
