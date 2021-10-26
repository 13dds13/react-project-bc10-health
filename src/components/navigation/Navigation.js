import React from "react";
import  {mainRoutes} from "../../routes/mainRoutes";
import isAuth from "../../ТУТ_ТИМЧАСОВЕ_ЗНАЧЕННЯ_isAuth";// використовується, поки немає STATE
import NavigationItem from "./NavigationItem";
import { NavigationStyled } from "./NavigationStyled";

const Navigation = () => {
  return <NavigationStyled>
    <ul className='nav__list'>
      {mainRoutes.map(({name, path, exact, isPrivate, isRestricted}) => <NavigationItem
      key={path}
      name={name}
      path={path}
      exact={exact}
      isPrivate={isPrivate}
      isRestricted={isRestricted}
      isAuth={isAuth}
      />)}
    </ul>
  </NavigationStyled>;
};

export default Navigation;
