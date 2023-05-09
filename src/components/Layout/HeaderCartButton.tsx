import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

import CartContext from "../../store/cartContext";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props: { onClick: () => void }) => {
  const cartCtx = useContext(CartContext);

  const numberOfItems = cartCtx.items.reduce((cur, item) => {
    return cur + item.amount;
  }, 0);

  return (
    <>
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <AiOutlineShoppingCart />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfItems}</span>
      </button>
    </>
  );
};

export default HeaderCartButton;
