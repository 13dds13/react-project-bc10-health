import React from "react";
import { useSelector } from "react-redux";
import { getIsAuth } from "../../redux/auth/authSelectors";
import { mainRoutes } from "../../routes/mainRoutes";
import NavigationItem from "./NavigationItem";
import { NavigationStyled } from "./NavigationStyled";

const Navigation = ({isOpenModal, hideModal, width}) => {

  const isAuth = useSelector(getIsAuth);

  return (
    <NavigationStyled>
      <ul className={isAuth && width < 1024 && isOpenModal ? "nav__list-for-modal" : "nav__list"} >
        {mainRoutes.map(({ name, path, exact, isPrivate, isRestricted }) => (
          <NavigationItem
            key={path}
            name={name}
            path={path}
            exact={exact}
            isPrivate={isPrivate}
            isRestricted={isRestricted}
            isAuth={isAuth}
            width={width}
            hideModal={hideModal}
            isOpenModal={isOpenModal}
          />
        ))}
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;
