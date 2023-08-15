import React from "react";
import { ListTechs, MainStacks } from "../styles/pages/Techs";
import { Divider } from "../styles/components/Divider";
import tech from '../helpers/tech.js';

class Techs extends React.Component {
  render() {
    return (
      <MainStacks id="stacks">
        <h2>Stacks</h2>
        <ListTechs>
          {tech.map((t) => (
            <div className="inView" key={t.name}>
              <img src={t.img} />
              <p>{t.name}</p>
            </div>
          ))}
        </ListTechs>
        <Divider></Divider>
      </MainStacks>
    )
  }
}

export default Techs;