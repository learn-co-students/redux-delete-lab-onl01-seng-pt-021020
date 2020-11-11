import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        <ul>
          <li>{this.props.name}</li>
          <button
            onClick={() => this.props.removeBand(this.props.id)}
          >DELETE</button>
        </ul>
      </div>
    );
  }
};

export default Band;
