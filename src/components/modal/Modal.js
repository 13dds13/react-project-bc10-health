import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { ModalStyled } from "./ModalStyled";

const Modal = ({ children, showModal }) => {

const isOpenDiaryModal = useSelector(state => state.diaryModal.isOpenModal)

  const onEsc = (e) => {
    if (e.code === "Escape") {
      showModal();
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target !== e.currentTarget) return;
    showModal();
  };

  useEffect(() => {
    window.addEventListener("keydown", onEsc);
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onEsc);
      const body = document.querySelector("body");
      body.style.overflow = "auto";
    };
  }, []);

  return (
    <ModalStyled isOpenDiaryModal={isOpenDiaryModal}>
      <div className="overlay" onClick={handleBackdropClick}>
        <div className="modal">{children}</div>
      </div>
    </ModalStyled>
  );
};

export default Modal;
