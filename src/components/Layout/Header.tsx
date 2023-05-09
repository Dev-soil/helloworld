import React from "react";

import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";

type Props = {
  onCartOpen: () => void;
};

const Header = ({ onCartOpen }: Props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>OrderMeals</h1>
        <HeaderCartButton onClick={onCartOpen} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="맛있는 음식으로 가득찬 식탁 사진" />
      </div>
    </>
  );
};

export default Header;
