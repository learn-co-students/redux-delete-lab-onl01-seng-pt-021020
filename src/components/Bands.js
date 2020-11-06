import React from 'react'

import Band from './Band'


const Bands = props => {
  return (
    props.bands ?
      <ul>
        {props.bands.map(band => <Band key={band.id} band={band} deleteBand={props.deleteBand} />)}
      </ul> :
      null
  )
}


export default Bands