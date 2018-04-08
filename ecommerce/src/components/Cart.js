import React, { Component } from 'react'
import { connect } from 'react-redux'

import { deleteCart } from '../actions'

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state={}
  }

  render() {
    return (
      <div className="col-md-12">
        {(this.props.cart.map((c, index)=>
          <div className="col-md-1 product-men" key={index}>
            <p>{c.name}</p>
            <p>{c.price}</p>
            <img src={c.image} />
            <button className="btn btn-danger" onClick={()=> this.props.deleteCart(this.props.cart, index)}>X</button>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCart: (cart, index) => dispatch(deleteCart(cart, index))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)
