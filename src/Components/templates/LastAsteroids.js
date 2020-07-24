import React from 'react';
import TitlesInfo from '../organisms/TitlesInfo';
import PrincipalCard from '../organisms/PrincipalCard';
import ImgData from '../../imgUrl.json';
import '../../static/sass/SassComponents/LastAsteroid.scss';

export const useLastAsteroid = (getNeos) => {
  let arrayNeo = getNeos.slice(0, 3).map((neo) => {
    const id = Math.round(Math.random() * ImgData.length);
    neo.sourceimg = ImgData[id];

    return neo;
  });

  return arrayNeo;
};

export const LastAsteroidsComponent = ({ data: { getNeos = [] } } = {}) => {
  let cards = useLastAsteroid(getNeos);

  return (
    <div className='Card'>
      <div className='Container__title'>
        <TitlesInfo
          to='/AllAsteroid'
          title='Últimos Asteroides'
          description='Descubré los últimos asteroides descubiertos. '
        />
      </div>
      <div className='Card__principal'>
        {cards.map((neo) => (
          <PrincipalCard
            imagen={neo.sourceimg}
            key={neo.neo_reference_id}
            {...neo}
          />
        ))}
      </div>
    </div>
  );
};
