import React, { Component } from 'react'
import BandInput from './BandInput';
import Bands from './Bands'

import { connect } from 'react-redux'

class BandsContainer extends Component {
  
  // renderBands = () => {
  //   return this.props.bands.map(band => <Bands delete={this.props.delete} key={band.id} band={band} />)
  // }
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands} deleteBand={this.props.deleteBand}/>
      </div>
    )
  }

  // render() {
  //   return (
  //     <div>
  //       <BandInput addBand={this.props.addBand}/>
  //       <Bands band={this.props.bands} />
  //     </div>
  //   )
  // }
}

const mapStateToProps = ({ bands }) => ({ bands })

// const mapDispatchToProps = dispatch => {
//   return {
//     delete: bandName => dispatch({
//       type: 'DELETE_BAND',
//       payload: bandName
//     })
//   }
// }
const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  deleteBand: id => dispatch({type: "DELETE_BAND", id})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
