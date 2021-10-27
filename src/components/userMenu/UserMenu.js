import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { UserMenuStyled } from "./UserMenuStyled";
import { authLogout } from "../../redux/auth/authOperations";


const UserMenu = () => {

const dispatch = useDispatch();

const onHandleClick = () => dispatch(authLogout())

  const userName = useSelector(state => state.authData.userInfo.user?.username)
  return <UserMenuStyled>
    <p className='user-menu__text'>{userName}</p>
    <button className='user-menu__button' onClick={onHandleClick}>Выйти</button>
  </UserMenuStyled>;
};

export default UserMenu;
