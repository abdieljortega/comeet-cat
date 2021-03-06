import React, { Component } from 'react';
import { ButtonPrimarySmall } from './Buttons';
import { Link } from 'react-router-dom';
import '../static/sass/SassComponents/TitlesInfo.scss';

class TitlesInfo extends Component {
  render() {
    return (
      <div className='titles-info'>
        <h2 className='titles-info__title'>{this.props.title}</h2>
        <p className='titles-info__description'>{this.props.description}</p>
        <Link to={this.props.to}>
          <ButtonPrimarySmall title='Ver màs'></ButtonPrimarySmall>
        </Link>
      </div>
    );
  }
}

export default TitlesInfo;
