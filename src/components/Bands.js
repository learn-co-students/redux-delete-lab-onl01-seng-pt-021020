import React from 'react';
import Band from './Band'

class Bands extends React.Component {

    renderBands = () => this.props.bands.map(band => <Band name={band.name} id={band.id} key={band.id} removeBand={this.props.removeBand}/>)
    
    render() {
        return (
            <div>
                {this.renderBands()}
            </div>
        )
    }
}

export default Bands