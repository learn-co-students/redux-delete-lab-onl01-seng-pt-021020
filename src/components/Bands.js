import React from 'react';
import Band from './Band'

const Bands = props => {
  const bands = props.bands.map(band => <Band name={band.name} key={band.id} {...band} deleteBand={props.deleteBand}/>)

  return (
    <div>
      {bands}
    </div>
  );

};

export default Bands;