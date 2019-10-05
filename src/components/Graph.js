import React, { Component } from 'react'

import '../style/Graph.css'

export default class Graph extends Component {
  render () {
    return (
      <div className='graph'>
        <canvas className='graph-canvas' />
      </div>
    )
  }
}
