import React, { Fragment } from "react";
import ReactDom from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = ({ onCartClose }: { onCartClose: () => void }) => {
  return <div className={classes.backdrop} onClick={onCartClose}></div>;
};

const ModalOverlay = (props: { children: React.ReactNode }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props: {
  children: React.ReactNode;
  onCartClose: () => void;
}) => {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop onCartClose={props.onCartClose} />,
        portalElement!
      )}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement!
      )}
    </>
  );
};

export default Modal;
