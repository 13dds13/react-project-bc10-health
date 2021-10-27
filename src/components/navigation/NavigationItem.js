import React from "react";
import { NavLink } from "react-router-dom";

const NavigationItem = ({
  name,
  path,
  exact,
  isPrivate,
  isRestricted,
  isAuth,
}) => {
  return <>
      {!isPrivate && !isRestricted && (
        <li className='nav__item'>
          <NavLink
            to={path}
            exact={exact}
            className='nav__link'
            activeClassName='nav__link-active'
            >
            {name}
          </NavLink>
        </li>
      )}
      {isPrivate && !isRestricted && isAuth && (
        <li className='nav__item'>
        <NavLink
          to={path}
          exact={exact}
          className='nav__link'
          activeClassName='nav__link-active'
          >
          {name}
        </NavLink>
      </li>
      )}
      {!isPrivate && isRestricted && !isAuth && (
        <li className='nav__item'>
        <NavLink
          to={path}
          exact={exact}
          className='nav__link'
          activeClassName='nav__link-active'
          >
          {name}
        </NavLink>
      </li>
      )}
  </>;
};

export default NavigationItem;
