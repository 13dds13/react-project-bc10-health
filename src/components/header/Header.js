import { useState, useEffect } from "react";
import Navigation from "../navigation";
import logo from "../../images/logo-png 1.png";
import { HeaderStyled } from "./HeaderStyled";
import { useHistory } from "react-router-dom";

const Header = () => {

  let history = useHistory();
  const [width, setWidth] = useState(window.innerWidth);
  const [breakPoint, setBreakPoint] = useState(768);

  const onHandleClick = () => history.push("/");

  const handleResizeWindow = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return (
    <HeaderStyled>
      <div className="header__wrap" onClick={onHandleClick}>
        <img
          className="header__logo"
          src={logo}
          alt={"logo"}
        />
        {width >= breakPoint && (
          <p className="header__text">
            Slim <span className="header__text-color">Mom</span>
          </p>
        )}
      </div>
      <Navigation />
    </HeaderStyled>
  );
};

export default Header;
