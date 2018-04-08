export const assignInput = (input) => {
  return {
    type: 'Input',
    payload: input,
  }
}

export const addToCart = (cart, item) => {
  const newCart = [
    ...cart,
    item
  ]
  return {
    type: 'Cart',
    payload: newCart,
  }
}

export const deleteCart = (cart, index) => {
  let newCart = cart
  newCart.splice(index, 1)
  newCart = [
    ...newCart
  ]
  return {
    type: 'Cart',
    payload: newCart,
  }
}
