import React from 'react'

class SwagBag extends React.Component {

  // constructor() {
  //   super()
  //   this.bagCompleted = this.bagCompleted.bind(this)
  // }

  bagCompleted () {
    console.log('bag completed in swag bag component')

    this.props.bagCompleted('bag')
  }

  render(){
    return (
      <div>
        <button className="btn-lg btn-default" onClick={this.props.loadSampleBags}>load sample bags</button>
      </div>
    )
  }
}

export default SwagBag
