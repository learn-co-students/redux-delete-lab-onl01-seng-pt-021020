// this component is responsible for showing info on one band
// it will have name and id as props

// import React, { Component } from 'react';


// const Band = props => {
  
//   return (
//     <div>
//       <span>{props.band.name}</span><button onClick={() => props.delete(props.band.id)}></button>
//     </div>
//   )
// }

// export default Band;


import React, { Component } from 'react';

class Band extends Component {

  handleOnClick = () => {
    this.props.deleteBand(this.props.id)
  }

  render() {
    return(
      <div>
        <li>{this.props.name}</li>
        <button onClick={this.handleOnClick}>
          Delete
        </button>
      </div>
    )
  }
};

export default Band;