import React from 'react'

class Bag extends React.Component {

  render(){
    const { details, index } = this.props
    return (
      <div className="SwagBag">
        <hr/>
        <div className="row">
          <div className="col-xs-4">
            <h2 className="text-uppercase">{details.staffMember}</h2>
          </div>
          <div className="col-xs-5">
            <ul className="list-unstyled">
              {
                Object
                .keys(details.items)
                .map(key => {
                  return <li key={key}>{details.items[key].quantity} {details.items[key].ticketType}</li>
                })
              }
            </ul>
          </div>
          <div className="col-xs-3">
            <button className="btn-lg btn-default btn-block" type="submit" onClick={ () => this.props.removeBag(index)}>Complete</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Bag
