import React, { Component } from 'react'

import '../style/GraphFields.css'

class GraphField extends Component {
  render () {
    return (
      <div className='graph-field'>
        <label className='graph-field-name'> {this.props.title} </label>
        <input type='number' className='graph-field-input' />
      </div>
    )
  }
}

export default class GraphFields extends Component {
  render () {
    return (
      <div className='graph-fields'>
        <GraphField title='Test Value' />
        <GraphField title='Mean' />
        <GraphField title='Standard Deviation' />
      </div>
    )
  }
}
