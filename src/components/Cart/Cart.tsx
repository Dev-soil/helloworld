import Modal from "../UI/Modal";
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
  const cartItems: CartItems[] = [
    {
      id: "m1",
      name: "Sushi",
      amount: 2,
      price: 22.99,
    },
    {
      id: "m2",
      name: "Schnitzel",
      amount: 3,
      price: 16.5,
    },
  ];

  return (
    <Modal onCartClose={onCartClose}>
      <ul className={classes["cart-items"]}>
        {cartItems.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>20.22</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onCartClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
