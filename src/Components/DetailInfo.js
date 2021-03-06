import React, { Component } from "react";
import "../static/sass/SassComponents/AsteroidDetail.scss";
import { ButtonPrimaryMedium } from "./Buttons";
import Share from "./Share";
import Hazardous from "./Hazardous.js";

import {
  GiRingedPlanet,
  GiThunderball,
  GiOrbit,
  GiOrbital,
} from "react-icons/gi";

class DetailInfo extends Component {
  render() {
    return (
      <div className="detail-info__container">
        <Hazardous />
        <h3>Datos:</h3>
        <ul>
          <li>
            <GiRingedPlanet className="details-icon" size="1.2em" />
            Diametro:
          </li>
          <li>
            <GiThunderball className="details-icon" size="1.2em" />
            Velocidad Relativa:
          </li>
          <li>
            <GiOrbit className="details-icon" size="1.2em" />
            Periodo Orbital:
          </li>
          <li>
            <GiOrbital className="details-icon" size="1.2em" />
            Tipo de Orbita:
          </li>
        </ul>
        <ButtonPrimaryMedium>Details</ButtonPrimaryMedium>
        <Share />
      </div>
    );
  }
}

export default DetailInfo;
