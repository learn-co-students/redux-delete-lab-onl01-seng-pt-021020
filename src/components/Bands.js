import React from 'react';
import Band from './Band';

const Bands = props => {
  const bands = props.bands.map((band) => {
	  return <Band deleteBand={props.deleteBand} {...band} key={band.id}/>;
  });
	
  return (
    <div>
      {bands}
    </div>
  );

};

export default Bands;