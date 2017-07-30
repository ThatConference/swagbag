import React from 'react'

class Bag extends React.Component {

  render(){
    const { details, index } = this.props
    return (
      <div className="swagBag">
        <hr/>
        <div className="row">
          <div className="col-md-3">
            <h2 className="text-uppercase">{details.staffMember}</h2>
          </div>
          <div className="col-md-2">
            <h2 className="text-uppercase">{details.orderNumber}</h2>
          </div>
          <div className="col-md-5">
            <ul className="list-unstyled">
              {
                Object
                .keys(details.items)
                .map(key => {
                  return <li className="row" key={key}>
                  <span className="col-md-1">{details.items[key].quantity}</span>
                  <span className="text-uppercase col-md-2">{details.items[key].ticketType}</span>
                  <span className="text-uppercase col-md-2">{details.items[key].personType}</span>
                  <span className="col-md-1">{details.items[key].shirtSize}</span>
                  </li>
                })
              }
            </ul>
          </div>
          <div className="col-md-2">
            <button className="btn-lg btn-default btn-block btn-complete" type="submit" onClick={ () => this.props.removeBag(index)}>Complete</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Bag
