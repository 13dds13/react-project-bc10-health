import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getIsAuth } from "../../redux/auth/authSelectors";
import { getIsOpenModal } from "../../redux/modal/modalSelectors";
import { ModalStyled } from "./ModalStyled";
import { useLocation } from "react-router-dom";
import { createPortal } from 'react-dom'


const Modal = ({ children, showModal }) => {

const modalRoot = document.querySelector('#modal-root')

const isOpenDiaryModal = useSelector(getIsOpenModal)
const isAuth = useSelector(getIsAuth)
const location = useLocation();

const pathDiary = location.pathname === "/diary";
const pathHome = location.pathname === "/";


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
    if((isAuth && isOpenDiaryModal && pathDiary) || (isOpenDiaryModal && pathHome) ){
      const body = document.querySelector("body");
      body.style.overflow = "hidden";
      window.scrollTo(0, 0);
    }

    return () => {
      window.removeEventListener("keydown", onEsc);
        const body = document.querySelector("body");
        body.style.overflow = "auto";


    };
  }, []);

  return createPortal (
    <ModalStyled isOpenDiaryModal={isOpenDiaryModal}>
      <div className="overlay" onClick={handleBackdropClick}>
        <div className="modal">{children}</div>
      </div>
    </ModalStyled>, modalRoot
  );
};

export default Modal;
