import React from "react";

import type { CartItems } from "../components/Cart/Cart";

// 이미 장바구니에 담겨있는 상품이면 가격, 수량만 올리기
// 장바구니에 없는 상품이면 새로 추가하기

export type CartContextType = {
  items: CartItems[];
  totalAmount: number;
  addItem: (item: CartItems) => void;
  removeItem: (id: string) => void;
};

const CartContext = React.createContext<CartContextType>({
  items: [],
  totalAmount: 0,
  addItem: (item: CartItems) => {},
  removeItem: (id: string) => {},
});

export default CartContext;
