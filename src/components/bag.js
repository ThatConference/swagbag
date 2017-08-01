import React from 'react'

class Bag extends React.Component {

  render(){
    const { details, index } = this.props
    return (
      <div className="swagBag">
        <hr/>
        <div className="row">
            <div className="col-md-4">
                <button type="submit" onClick={ () => this.props.removeBag(index)} className="btn-lg btn-default btn-complete">
                    <div className="col-md-12">
                        <h2 className="text-uppercase">{details.staffMember}</h2>
                    </div>
                    <div className="col-md-12">
                        <h4 className="text-uppercase">{details.orderNumber}</h4>
                    </div>
                </button>
            </div>
            <div className="col-md-8">
                <ul className="list-unstyled">
                  {
                    Object
                    .keys(details.items)
                    .map(key => {
                      return <li className="row" key={key}>
                      <span className="col-xs-1">{details.items[key].quantity}</span>
                      <span className="text-uppercase col-xs-5">{details.items[key].ticketType}</span>
                      <span className="text-uppercase col-xs-4">{details.items[key].personType}</span>
                      <span className="col-xs-1 col-">{details.items[key].shirtSize}</span>
                      </li>
                    })
                  }
                </ul>
            </div>
        </div>
      </div>
    )
  }
}

export default Bag
