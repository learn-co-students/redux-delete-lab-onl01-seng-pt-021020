import React, { Component } from 'react';
import Band from './Band'


function Bands(props) {
  const bands = props.bands.map(band => <Band key={band.id} {...band} deleteBand={props.deleteBand}/>)
  return (
    <div>
      {bands}
    </div>
  );
};

export default Bands;
