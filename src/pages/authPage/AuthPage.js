import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mainRoutes } from "../../routes/mainRoutes";
import { authLogin, authRegistration } from "../../redux/auth/authOperations";
import AuthTempForm from "../../components/authTempForm/";
import { useLocation } from "react-router";
import { getAuthError } from "../../redux/auth/authSelectors";

import { notification } from "../../helpers/notification";

const AuthPage = () => {
  const dispatch = useDispatch();
  const errorMsg = useSelector(getAuthError);
  const { pathname } = useLocation();
  const handleSubmit = (userData) => {
    pathname === mainRoutes[4].path
      ? dispatch(authRegistration(userData))
      : dispatch(authLogin(userData));
  };
  
  useEffect(() => {
    if (errorMsg) {
      notification("error", errorMsg);
    }
  }, [errorMsg]);

  const currentLanguage = useSelector((state) => state.language.languages)
  const currenBtnName = `name_${currentLanguage}`

  return (
    <>
      {/* <div className="bg-img"> */}
        <div className="container">
          {mainRoutes
            .filter(({ isRestricted }) => isRestricted)
            .map(
              (route) =>
              route.path === pathname && (
                  <AuthTempForm
                    handleSubmit={handleSubmit}
                    btnName={route[currenBtnName]}
                    key={route.path}
                    errorMsg={errorMsg}
                    currenBtnName={currenBtnName}
                  />
                )
            )}
        </div>
      {/* </div> */}
    </>
  );
};

export default AuthPage;
