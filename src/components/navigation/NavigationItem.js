import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const NavigationItem = ({
  // name,
  path,
  exact,
  isPrivate,
  isRestricted,
  isAuth,
  width,
  hideModal,
  isOpenModal,
  name_en,
  name_ru
}) => {
  const onHandleClick = () => {
    if (width < 1280 && isOpenModal) {
      hideModal((prev) => !prev);
    }
  };

  const language = useSelector((state) => state.language.languages)

  return (
    <>
      {!isPrivate && !isRestricted && (
        <li className="nav__item">
          <NavLink
            to={path}
            exact={exact}
            className="nav__link"
            activeClassName="nav__link-active"
          >
            {/* {name} */}
            {language === 'ru' ? name_ru : name_en}
          </NavLink>
        </li>
      )}
      {isPrivate && !isRestricted && isAuth && (
        <li
          className={
            width < 1280 && isOpenModal ? "nav__item-for-modal" : "nav__item"
          }
        >
          <NavLink
            onClick={onHandleClick}
            to={path}
            exact={exact}
            className={
              width < 1280 && isOpenModal ? "nav__link-for-modal" : "nav__link"
            }
            activeClassName={
              width < 1280 && isOpenModal
                ? "nav__link-active-for-modal"
                : "nav__link-active"
            }
          >
            {/* {name} */}
            {language === 'ru' ? name_ru : name_en}
          </NavLink>
        </li>
      )}
      {!isPrivate && isRestricted && !isAuth && (
        <li className="nav__item">
          <NavLink
            to={path}
            exact={exact}
            className="nav__link"
            activeClassName="nav__link-active"
          >
            {/* {name} */}
            {language === 'ru' ? name_ru : name_en}
          </NavLink>
        </li>
      )}
    </>
  );
};

export default NavigationItem;
