import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getIsAuth } from "../../redux/auth/authSelectors";
import { getIsOpenModal } from "../../redux/modal/modalSelectors";
import { ModalStyled } from "./ModalStyled";
import { useLocation } from "react-router-dom";
import { createPortal } from "react-dom";

const Modal = ({ children, showModal }) => {
  const modalRoot = document.querySelector("#modal-root");

  const isOpenModal = useSelector(getIsOpenModal);
  const isAuth = useSelector(getIsAuth);
  const location = useLocation();
  const [width, setWidth] = useState(window.innerWidth);

  const pathDiary = location.pathname === "/diary";
  const pathHome = location.pathname === "/";
  const pathCalculator = location.pathname === "/calculator";

  const onEsc = (e) => {
    if (e.code === "Escape") {
      showModal();
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target !== e.currentTarget) return;
    showModal();
  };

  const handleResizeWindow = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("keydown", onEsc);
    window.addEventListener("resize", handleResizeWindow);
    if (
      (isAuth && isOpenModal && pathDiary && width < 768) ||
      (isAuth && isOpenModal && pathCalculator && width > 767) ||
      (isOpenModal && pathHome && width >= 768)
    ) {
      const body = document.querySelector("body");
      body.style.overflow = "hidden";
      window.scrollTo(0, 0);
    }

    return () => {
      window.removeEventListener("keydown", onEsc);
      const body = document.querySelector("body");
      body.style.overflow = "auto";
      window.removeEventListener("resize", handleResizeWindow);
    };
  });

  return createPortal(
    <ModalStyled isOpenDiaryModal={isOpenModal}>
      <div className="overlay" onClick={handleBackdropClick}>
        <div className="modal">{children}</div>
      </div>
    </ModalStyled>,
    modalRoot
  );
};

export default Modal;
