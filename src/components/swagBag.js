import React from 'react'

class SwagBag extends React.Component {

  render(){
    return (
      <div>
        <button className="btn-lg btn-default" onClick={this.props.loadSampleBags}>load sample bags</button>
      </div>
    )
  }
}

export default SwagBag
