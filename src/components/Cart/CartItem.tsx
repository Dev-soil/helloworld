import classes from "./CartItem.module.css";
import type { CartItems } from "./Cart";

type Props = {
  name: string;
  price: number;
  amount: number;
  // .bind로 인수를 미리 넘겨줌
  onRemove: (id: any) => void;
  onAdd: (item: any) => void;
};

const CartItem = (props: Props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
