import React from "react";
import sprite from "../../images/icons-header.svg";
import { useSelector, useDispatch } from "react-redux";
import { UserMenuStyled } from "./UserMenuStyled";
import { authLogout } from "../../redux/auth/authOperations";
import { getIsAuth, getUserName } from "../../redux/auth/authSelectors";
import { useLocation } from "react-router-dom";
import { getIsOpenModal } from "../../redux/modal/modalSelectors";
import { setModalValue } from "../../redux/modal/modalAction";
import { useTranslation } from "react-i18next";

const UserMenu = ({ width }) => {

  const dispatch = useDispatch();
  const location = useLocation();

  const path = location.pathname === "/diary" || location.pathname === "/";
  const isOpenModal = useSelector(getIsOpenModal);
  const userName = useSelector(getUserName);
  const isAuth = useSelector(getIsAuth)

  const onHandleClick = () => dispatch(authLogout());
  const onHandleSetModal = () => dispatch(setModalValue());

  const { t } = useTranslation();

  return (
    <UserMenuStyled>
      {width < 768 && path && isOpenModal && (
        <div>
          <svg className="user-menu__icon" onClick={onHandleSetModal}>
            <use href={sprite + "#icon-arrow"} />
          </svg>
        </div>
      )}
      <div className="user-menu__text-wrap">
        <p className="user-menu__text">{userName}</p>
        {isAuth && (
          <button className="user-menu__button" onClick={onHandleClick}>
            {/* Выйти */}
            {t("UserMenu.button")}
          </button>
        )}
      </div>
    </UserMenuStyled>
  );
};

export default UserMenu;
