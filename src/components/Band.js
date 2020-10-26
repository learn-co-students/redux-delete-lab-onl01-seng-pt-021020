import React, { Component } from 'react';

class Band extends Component {
  handleOnClick = () => {
    this.props.deleteBand(this.props.id)
  } 
  render() {
    return(
      <ul>
        <li key={this.props.bandId}>{this.props.name}</li>
        <button onClick={this.handleOnClick}>DELETE</button>
      </ul>
    );
  }
};

export default Band;
