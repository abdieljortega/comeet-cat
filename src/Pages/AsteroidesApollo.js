import React, { Component } from 'react';

import Hero from '../Components/Hero';
import ApolloCardsContainer from '../Components/ApolloCardsContainer';
import EstaticInformation from '../Pages/containers/EstaticInformation';
import CallToAction from './containers/CallToAction';

class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <h2 className='h2-prueba'>Asteroides Apollo</h2>
        <ApolloCardsContainer />
        <EstaticInformation />
        <CallToAction />
      </div>
    );
  }
}

export default Home;
