import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Navigation from "../navigation";
import logo from "../../images/logo-png 1.png";
import sprite from "../../images/icons-header.svg";
import { HeaderStyled } from "./HeaderStyled";
import { useHistory } from "react-router-dom";
import UserMenu from "../userMenu";
import Modal from "../modal_1";

const Header = () => {
  let history = useHistory();

  const isAuth = useSelector((state) => state.auth.isAuth);

  const [width, setWidth] = useState(window.innerWidth);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const breakPointTabletMobile = 320;
  const breakPointTablet = 768;
  const breakPointTabletDesktop = 1024;

  const goHomePage = () => history.push("/");
  const setModalState = () => setIsOpenModal((prev) => !prev);

  const handleResizeWindow = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return (
    <>
      <HeaderStyled>
          <div className="header__wrap" onClick={goHomePage}>
            <img className="header__logo" src={logo} alt={"logo"} />
            {width >= breakPointTablet && !isAuth && (
              <p className="header__text">
                Slim <span className="header__text-color">Mom</span>
              </p>
            )}
            {isAuth && (
              <p className="header__text">
                Slim <span className="header__text-color">Mom</span>
              </p>
            )}
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
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

          {width > 1023 && isAuth && <UserMenu />}

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
      {width < breakPointTablet && isAuth && <UserMenu />}
    </>
  );
};

export default Header;
