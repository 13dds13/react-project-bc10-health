import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getIsOpenModal } from "../../redux/modal/modalSelectors";
import { ModalStyled } from "./ModalStyled";

const Modal = ({ children, showModal }) => {

const isOpenDiaryModal = useSelector(getIsOpenModal)


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
    // const body = document.querySelector("body");
    // body.style.overflow = "hidden";
    // window.scrollTo(0, 0);
    return () => {
      window.removeEventListener("keydown", onEsc);
      // const body = document.querySelector("body");
      // body.style.overflow = "auto";
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
