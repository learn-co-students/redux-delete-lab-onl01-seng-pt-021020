import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {
  renderBands = () => this.props.bands.map(band => {
      return <Band delete={this.props.delete} key={band.id} band={band} />
    });

  render(){
    return (
      <ul>
        {this.renderBands()}
      </ul>
    );
  }
}

export default Bands