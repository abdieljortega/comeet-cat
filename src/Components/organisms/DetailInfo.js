import React, { Component } from "react";

import { ButtonPrimaryMedium } from "../molecules/Buttons";
import Share from "../molecules/Share";
import Hazardous from "../molecules/Hazardous";

import "../../static/sass/SassComponents/AsteroidDetail.scss";
import {
  GiRingedPlanet,
  GiThunderball,
  GiOrbit,
  GiOrbital,
} from "react-icons/gi";

class DetailInfo extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <div className="detail-info__container">
        <Hazardous />
        <h3>Datos:</h3>
        <ul>
          <li>
            <GiRingedPlanet className="details-icon" size="1.2em" />
            Diametro Estimado:
          </li>
          <li>
            <GiOrbit className="details-icon" size="1.2em" />
            Periodo Orbital:
          </li>
          <li>
            <GiThunderball className="details-icon" size="1.2em" />
            Más cercano a la tierra el:
          </li>
          <li>
            <GiOrbital className="details-icon" size="1.2em" />
            Proximidad a la tierra:
          </li>
        </ul>
        <ButtonPrimaryMedium
          to="/nombrar-asteroide"
          title="Nombra este asteroide"
        ></ButtonPrimaryMedium>
        <Share />
      </div>
    );
  }
}

export default DetailInfo;
