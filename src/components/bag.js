import React from 'react'
import PropTypes from 'prop-types'

class Bag extends React.Component {
  render () {
    const { details, index, removeBag } = this.props
    return (
      <div className='swagBag'>
        <hr />
        <div className='row'>
          <div className='col-md-4'>
            <button type='submit' onClick={() => removeBag(index)} className='btn-lg btn-default btn-complete'>
              <div className='col-md-12'>
                <h2 className='text-uppercase'>{details.staffMember}</h2>
              </div>
              <div className='col-md-12'>
                <h4 className='text-uppercase'>{details.orderNumber}</h4>
              </div>
            </button>
          </div>
          <div className='col-md-8'>
            <ul className='list-unstyled'>
              {
                Object
                .keys(details.items)
                .map(key => {
                  return (
                    <li className='row' key={key}>
                      <span className='col-xs-1'>{details.items[key].quantity}</span>
                      <span className='text-uppercase col-xs-5'>{details.items[key].ticketType}</span>
                      <span className='text-uppercase col-xs-4'>{details.items[key].personType}</span>
                      <span className='col-xs-1 col-'>{details.items[key].shirtSize}</span>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

Bag.propTypes = {
  details: PropTypes.object.isRequired,
  index: PropTypes.string.isRequired,
  removeBag: PropTypes.func.isRequired
}

export default Bag
