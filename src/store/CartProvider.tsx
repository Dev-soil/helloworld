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
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    // 장바구니에 항목이 있는지 확인
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item?.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      // 상품이 이미 있다면 수량만 올려주기
      console.log(1);
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      console.log(action.id);
      // 새로운 상품이라면 새로 추가
      updatedItems = state.items.concat(action.item);
    }

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  if (action.type === "REMOVE_ITEM" && action.id) {
    // const updatedItems = state.items.filter((item) => item.id !== action.id);
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item?.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
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
