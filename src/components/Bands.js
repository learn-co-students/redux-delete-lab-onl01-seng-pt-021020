// this component handles the rendering of all Band components from a list of bands provided as props

// import React from 'react'
// import Band from './Band'

// const Bands = props => {
//     const bands = props.bands.map((band, index) => {
//       return <li key={index}>{band.name}</li>;
//     });
  
//     return (
//       <div>
//           {bands}
//       </div>
//     );
  
//   };
  
//   export default Bands;
  

//   import React, { Component } from 'react';
//   import Band from './Band'

  import React from 'react';
  import Band from './Band'
  
  const Bands = props => {
    const bands = props.bands.map(band => <Band key={band.id} {...band} deleteBand={props.deleteBand}/>)
  
    return (
      <div>
        {bands}
      </div>
    );
  
  };
  
  export default Bands;