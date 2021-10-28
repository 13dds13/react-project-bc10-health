import React, { useEffect } from "react";
import { ModalStyled } from "./ModalStyled";

const Modal = ({ children, onBackdropClick, onEsc }) => {
  useEffect(() => {
    window.addEventListener("keydown", onEsc);
    return () => {
      window.removeEventListener("keydown", onEsc);
    };
  }, []);

  return (
    <ModalStyled>
      <div className="overlay" onClick={onBackdropClick}>
        <div className="modal">{children}</div>
      </div>
    </ModalStyled>
  );
};

export default Modal;
