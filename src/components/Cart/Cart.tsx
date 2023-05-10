import { useContext } from "react";

import CartContext from "../../store/cartContext";
import Modal from "../UI/Modal";
import Card from "../UI/Card";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";

export type CartItems = {
  id: string;
  name: string;
  amount: number;
  price: number;
};

type Props = {
  onCartClose: () => void;
};

const Cart = ({ onCartClose }: Props) => {
  const cartCtx = useContext(CartContext);
  const totalPrice = cartCtx.totalAmount.toFixed(2);
  const hasItems = cartCtx.totalAmount > 0;

  const addQuantityHandler = (item: CartItems) => {
    cartCtx.addItem(item);
  };

  const removeQuantityHandler = (id: string) => {
    cartCtx.removeItem(id);
  };

  return (
    <Modal onCartClose={onCartClose}>
      <Card>
        <ul className={classes["cart-items"]}>
          {cartCtx.items.map((item) => (
            <CartItem
              key={item.id}
              name={item.name}
              price={item.price}
              amount={item.amount}
              onAdd={addQuantityHandler.bind(null, item)}
              onRemove={removeQuantityHandler.bind(null, item.id)}
            />
          ))}
        </ul>
      </Card>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`$ ${totalPrice}`}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onCartClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
