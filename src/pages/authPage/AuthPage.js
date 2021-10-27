import React from "react";
import { useDispatch } from "react-redux";
import { mainRoutes } from "../../routes/mainRoutes";
import { authLogin, authRegistration } from "../../redux/auth/authOperations";
import AuthTempForm from "../../components/authTempForm/";
import { useLocation } from "react-router";

const AuthPage = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const handleSubmit = (userData) => {
    pathname === mainRoutes[4].path
      ? dispatch(authRegistration(userData))
      : dispatch(authLogin(userData));
  };
  return mainRoutes
    .filter(({ isRestricted }) => isRestricted)
    .map(
      ({ path, name }) =>
        path === pathname && (
          <AuthTempForm handleSubmit={handleSubmit} btnName={name} key={path} />
        )
    );
};

export default AuthPage;
