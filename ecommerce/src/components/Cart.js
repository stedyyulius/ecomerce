import React, { Component } from 'react'
import { connect } from 'react-redux'

var cart = [];

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state={}
  }

  render() {
    return (
      <div>
        {(this.props.cart.map((c, index)=>
          <div className="col-md-3 product-men" key={index}>
              <p>Name: {c.name}</p>
              <p>price: {c.price}</p>
              <img src={c.image} />
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  cart.push(state.cart)
  return {
    input: state.input,
    cart: state.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)
