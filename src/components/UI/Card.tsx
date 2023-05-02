import React from "react";

import classes from "./Card.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Card = (props: LayoutProps) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
