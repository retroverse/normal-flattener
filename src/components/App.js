import React, { Component } from 'react'

import '../style/App.css'
import Title from './Title'
import Graphs from './Graphs'
import GraphFields from './GraphFields'

const title = `Normal Flattener`

export default class App extends Component {
  render () {
    return (
      <div className='app'>
        <div className='content'>
          <Title title={title} />
          <div className='information'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit sed, voluptates officia corrupti ratione mollitia esse dicta unde ipsum laboriosam quam, sapiente soluta ea, error accusamus! Atque molestiae asperiores quae.
          Fugit eos eaque architecto consequatur esse tempora modi velit aperiam, excepturi ipsam, aliquid error accusamus itaque ex sunt eius vero veniam amet laboriosam necessitatibus recusandae veritatis assumenda quos. Eum, amet!
          Dolorem, adipisci labore deserunt nisi non sint assumenda fugiat autem sapiente commodi accusantium? Dolorem molestias illum id ratione facere ipsa. Sit ab reiciendis ut et distinctio reprehenderit vel molestias. Cumque!</div>
          <GraphFields />
          <Graphs />
        </div>
      </div>
    )
  }
}
