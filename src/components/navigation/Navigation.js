import React from "react";
import { useSelector } from "react-redux";
import { getIsAuth } from "../../redux/auth/authSelectors";
import { mainRoutes } from "../../routes/mainRoutes";
import NavigationItem from "./NavigationItem";
import { NavigationStyled } from "./NavigationStyled";

const Navigation = () => {
  const isAuth = useSelector(getIsAuth);
  return (
    <NavigationStyled>
      <ul className="nav__list">
        {mainRoutes.map(({ name, path, exact, isPrivate, isRestricted }) => (
          <NavigationItem
            key={path}
            name={name}
            path={path}
            exact={exact}
            isPrivate={isPrivate}
            isRestricted={isRestricted}
            isAuth={isAuth}
          />
        ))}
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;
