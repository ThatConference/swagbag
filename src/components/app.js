import React from 'react'

import base from '../base'
import Header from './header'
import SwagBag from './swagBag'
import Bag from './bag'

import sampleBags from './sampleData'

class App extends React.Component {
  constructor () {
    super()
    this.removeBag = this.removeBag.bind(this)
    this.loadSampleBags = this.loadSampleBags.bind(this)
    this.sortBags = this.sortBags.bind(this)

    this.state = {
      bags: {}
    }
  }

  componentWillMount () {
    this.ref = base.syncState(`/swagbag/bags`
      , {
        context: this,
        state: 'bags'
      })
  }

  componentWillUnmount () {
    base.removeBinding(this.ref)
  }

  removeBag (key) {
    console.log(`removing ${key} bag`)
    const bags = {...this.state.bags} // copy of state
    bags[key] = null // remove from firebase
    this.setState({bags: bags}) // update state
  }

  loadSampleBags () {
    console.log('loading sample bags')

    this.setState({
      bags: sampleBags
    })
  }

  sortBags (firstKey, secondKey) {
    const { bags } = this.state

    const first = bags[firstKey]
    const second = bags[secondKey]
    if (first.orderDate < second.orderDate) return -1
    if (first.orderDate > second.orderDate) return 1

    return 0
  }

  render () {
    const { bags } = this.state

    return (
      <div className='swagItems'>
        <Header />
        <SwagBag loadSampleBags={this.loadSampleBags} />
        <ul className='swagItems'>
          {
            Object
            .keys(bags)
            .sort(this.sortBags)
            .map(key => <Bag key={key} index={key} details={bags[key]} removeBag={this.removeBag} />)
          }
        </ul>
      </div>
    )
  }
}

export default App
