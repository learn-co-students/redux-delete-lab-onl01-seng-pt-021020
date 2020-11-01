import React from 'react';
import Band from './Band';

const Bands = (props) => {
    const bandList = props.bands.map(band => <Band delete={props.delete} key={band.id} band={band} />)
    return bandList;
}

export default Bands;