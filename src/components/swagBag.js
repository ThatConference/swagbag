import React from 'react'
import PropTypes from 'prop-types'

class SwagBag extends React.Component {
  render () {
    return (
      <div>
        <button className='btn-lg btn-default' onClick={this.props.loadSampleBags}>load sample bags</button>
      </div>
    )
  }
}

SwagBag.propTypes = {
  loadSampleBags: PropTypes.func.isRequired
}

export default SwagBag
