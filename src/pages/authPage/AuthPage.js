import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { mainRoutes } from "../../routes/mainRoutes";
import { authLogin, authRegistration } from "../../redux/auth/authOperations";
import AuthTempForm from "../../components/authTempForm/";
import { useLocation } from "react-router";
import { getAuthError } from "../../redux/auth/authSelectors";

const AuthPage = () => {
  const dispatch = useDispatch();
  const errorMsg = useSelector(getAuthError);
  const { pathname } = useLocation();
  const handleSubmit = (userData) => {
    pathname === mainRoutes[4].path
      ? dispatch(authRegistration(userData))
      : dispatch(authLogin(userData));
  };

  return (
    <>
      <div className="bg-img">
        <div className="container">
          {errorMsg && <p>{errorMsg}</p>}
          {mainRoutes
            .filter(({ isRestricted }) => isRestricted)
            .map(
              ({ path, name }) =>
                path === pathname && (
                  <AuthTempForm
                    handleSubmit={handleSubmit}
                    btnName={name}
                    key={path}
                  />
                )
            )}
        </div>
      </div>
    </>
  );
};

export default AuthPage;
