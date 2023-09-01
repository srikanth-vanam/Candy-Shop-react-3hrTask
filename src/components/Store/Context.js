import React from "react";

const CartContext = React.createContext({
  candyItems: [],
  cartItems: [],
  addCandyItem: (item) => {},
  addCartItem: (item) => {},
  getCartItemsFromCrud:()=>{},
});
export default CartContext;
