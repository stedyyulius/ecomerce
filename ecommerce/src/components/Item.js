import React, { Component } from 'react'
import { connect } from 'react-redux'

import currencyFormatter from 'currency-formatter'

import { addToCart } from '../actions'

var dummy = [
  {
    name: 'kaos item',
    price: 120000,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBcBkzsbz6_VYiPSy3UowDms_UaaWcm3qP9dAYVcwS0_2KxngciQ',
    category: 'kaos',
  },
  {
    name: 'kaos putih',
    price: 10000,
    image: 'https://www.lanangindonesia.com/admin/sliderArticle/kaos-putih-1.jpg',
    category: 'kaos',
  },
  {
    name: 'laptop',
    price: 120000,
    image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6090/6090905_sd.jpg',
    category: 'laptop'
  },
  {
    name: 'bukan',
    price: 120000,
    image: 'https://cdn0.iconfinder.com/data/icons/basic-ui-elements-colored/700/010_x-3-512.png',
    category: 'bukan lagi'
  },
  {
    name: 'steak',
    price: 120000,
    image: 'https://static01.nyt.com/images/2016/06/23/dining/23COOKING-SOY-GRILLED-STEAK1/23COOKING-SOY-GRILLED-STEAK1-videoSixteenByNineJumbo1600.jpg',
    category: 'makanan'
  }
]

class Item extends Component {
  constructor(props){
    super(props)
    this.state={
      cart: []
    }
  }

  addToCart(item) {
    const newCart = this.state.cart
    newCart.push(item)
    this.setState({
      cart: newCart
    })
  }

  render() {
    return (
      <div className="tab3">
      {dummy.map((item, index)=>
      (item.category.includes(this.props.input))
      ? <div className="col-md-3 product-men" key={index}>
          <div className="men-pro-item simpleCart_shelfItem">
            <div className="men-thumb-item">
              <img src={item.image} alt="" className="pro-image-front" />
                <div className="men-cart-pro">
                  <div className="inner-men-cart-pro">
                    <a className="link-product-add-cart">Quick View</a>
                  </div>
                </div>
                <span className="product-new-top">New</span>
            </div>
            <div className="item-info-product ">
              <h4><a>{item.name}</a></h4>
              <div className="info-product-price">
                <span className="item_price">{currencyFormatter.format(item.price, { code: 'IDR' })}</span>
              </div>
              <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                  <fieldset>
                    <input type="hidden" name="cmd" value="_cart" />
                    <input type="hidden" name="add" value="1" />
                    <input type="hidden" name="business" value=" " />
                    <input type="hidden" name="item_name" value="Puma Backpack" />
                    <input type="hidden" name="amount" value="30.99" />
                    <input type="hidden" name="discount_amount" value="1.00" />
                    <input type="hidden" name="currency_code" value="USD" />
                    <input type="hidden" name="return" value=" " />
                    <input type="hidden" name="cancel_return" value=" " />
                    <input type="submit" value="Add to cart" className="button" onClick={()=> this.props.addToCart(this.props.cart, item)}/>
                  </fieldset>
              </div>
            </div>
          </div>
        </div>
      : null
      )}
        <div className="clearfix"></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    input: state.input,
    cart: state.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (cart, item) => dispatch(addToCart(cart, item))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Item)
