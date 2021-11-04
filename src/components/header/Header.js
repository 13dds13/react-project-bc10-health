import { useState, useEffect, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navigation from "../navigation";
import logo from "../../images/logo-png 1.png";
import sprite from "../../images/icons-header.svg";
import { HeaderStyled } from "./HeaderStyled";
import { useHistory } from "react-router-dom";
import { getIsOpenModal } from "../../redux/modal/modalSelectors";
import { getIsAuth } from "../../redux/auth/authSelectors";
import UserMenu from "../userMenu";
import Modal from "../modal_1";
import { useTranslation } from "react-i18next";
import i18n from "../../utils/i18next";
import { setLanguages } from "../../redux/languages/languagesActions";
import DarkModeToggle from "../dark-btn/DarkModeToggle";

const Header = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  const isAuth = useSelector(getIsAuth);
  const isOpenModalFromState = useSelector(getIsOpenModal);

  const [width, setWidth] = useState(window.innerWidth);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const breakPointTablet = 768;
  const breakPointTabletDesktop = 1280;

  const goHomePage = () => history.push("/");
  const setModalState = () => setIsOpenModal((prev) => !prev);

  const handleResizeWindow = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  // ============================================
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const onHandleClickEn = () => {
    changeLanguage("en");
    dispatch(setLanguages("en"));
  };
  const onHandleClickRu = () => {
    changeLanguage("ru");
    dispatch(setLanguages("ru"));
  };
  // ============================================
  return (
    <>
      <div className="container">
        <HeaderStyled>
          <div className="header__wrap" onClick={goHomePage}>
            <img className="header__logo" src={logo} alt={"logo"} />
            {width >= breakPointTablet && !isAuth && (
              <p className="header__text">
                Slim<span className="header__text-color">Mom</span>
              </p>
            )}
            {isAuth && (
              <p className="header__text">
                Slim<span className="header__text-color">Mom</span>
              </p>
            )}
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="header__lang-btn-wrap">
              <DarkModeToggle />
              <div className="header__lang-btn-wrap-wrap">
                <button
                  className="header__lang-btn"
                  type="button"
                  onClick={onHandleClickEn}
                >
                  EN
                </button>
                <button
                  className="header__lang-btn"
                  type="button"
                  onClick={onHandleClickRu}
                >
                  RU
                </button>
              </div>
            </div>
            {width >= breakPointTablet &&
              width < breakPointTabletDesktop &&
              isAuth && <UserMenu />}

            {width < breakPointTabletDesktop && isAuth ? (
              !isOpenModal ? (
                <svg className="header__icon-menu" onClick={setModalState}>
                  <use href={sprite + "#icon-menu"} />
                </svg>
              ) : (
                <svg className="header__icon-close" onClick={setModalState}>
                  <use href={sprite + "#icon-close"} />
                </svg>
              )
            ) : (
              <Navigation />
            )}
          </div>

          {width > 1279 && isAuth && <UserMenu />}

          {isOpenModal && (
            <Modal hideModal={setIsOpenModal}>
              <Navigation
                isOpenModal={isOpenModal}
                hideModal={setIsOpenModal}
                width={width}
              />
            </Modal>
          )}
        </HeaderStyled>
      </div>
      {width < 1280 && (
        <hr
          style={{
            backgroundColor: "#e0e0e0",
            height: "2px",
            margin: "0",
            border: "none",
          }}
        />
      )}
      <div style={{ backgroundColor: "#f0f1f3" }}>
        <div
          className="container"
          style={{
            paddingLeft: "0",
            paddingRight: "0",
          }}
        >
          {width < breakPointTablet && isAuth && <UserMenu width={width} />}
          {width < breakPointTablet && !isAuth && isOpenModalFromState && (
            <UserMenu width={width} />
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
