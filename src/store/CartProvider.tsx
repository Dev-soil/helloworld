import React from "react";

import CartContext from "./cartContext";
import type { CartItems } from "../components/Cart/Cart";

const CartProvider = (props: { children: React.ReactNode }) => {
  const addItemToCartHandler = (item: CartItems) => {};

  const removeItemFromCartHandler = (id: string) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
