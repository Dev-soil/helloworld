import React, { useReducer } from "react";

import CartContext from "./cartContext";
import type { CartItems } from "../components/Cart/Cart";

interface DefaultCartType {
  items: CartItems[];
  totalAmount: number;
}

type Action = {
  type: string;
  item?: CartItems;
  id?: string;
};

const defaultCartState: DefaultCartType = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state: DefaultCartType, action: Action) => {
  if (action.type === "ADD_ITEM" && action.item) {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  if (action.type === "REMOVE_ITEM" && action.id) {
    const updatedItems = state.items.filter((item) => item.id !== action.id);
  }
  return defaultCartState;
};

const CartProvider = (props: { children: React.ReactNode }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item: CartItems) => {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  };

  const removeItemFromCartHandler = (id: string) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
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
