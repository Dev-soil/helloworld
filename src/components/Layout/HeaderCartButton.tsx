import React, { useContext, useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

import CartContext from "../../store/cartContext";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props: { onClick: () => void }) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const numberOfItems = cartCtx.items.reduce((cur, item) => {
    return cur + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);

  return (
    <>
      <button className={btnClasses} onClick={props.onClick}>
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
