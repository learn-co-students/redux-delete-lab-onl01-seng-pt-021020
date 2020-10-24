import React, {Component} from 'react'
import Band from './Band'

export default class Bands extends Component {

  render(){
    return (
      <div>
        <ul>
        {this.props.bands.map(band => {
          return <Band delete={this.props.delete} key={band.id} band={band}/>
        })}
        </ul>
      </div>
    )
  }
}