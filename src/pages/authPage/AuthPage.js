import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mainRoutes } from "../../routes/mainRoutes";
import { authLogin, authRegistration } from "../../redux/auth/authOperations";
import AuthTempForm from "../../components/authTempForm/";
import { useLocation } from "react-router";
import { getAuthError } from "../../redux/auth/authSelectors";

import { notification } from "../../components/notification/Notification";
import { NotificationManager } from "react-notifications";

const AuthPage = () => {
  const dispatch = useDispatch();
  const errorMsg = useSelector(getAuthError);
  const { pathname } = useLocation();
  const handleSubmit = (userData) => {
    pathname === mainRoutes[4].path
      ? dispatch(authRegistration(userData))
      : dispatch(authLogin(userData));
  };
  console.log(errorMsg);
  useEffect(() => {
    if (errorMsg) {
      notification("error", errorMsg);
    }
  }, [errorMsg]);

  // errorMsg && notification(errorMsg);

  // const createNotification = (type) => {
  //   // return () => {
  //   switch (type) {
  //     case "info":
  //       NotificationManager.info(errorMsg);
  //       break;
  //     default:
  //       return;
  //     // case 'success':
  //     //   NotificationManager.success('Success message', 'Title here');
  //     //   break;
  //     // case 'warning':
  //     //   NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
  //     //   break;
  //     // case 'error':
  //     //   NotificationManager.error('Error message', 'Click me!', 5000, () => {
  //     //     alert('callback');
  //     // });
  //     // break;
  //     // }
  //   }
  // };

  return (
    <>
      {/* {errorMsg && notification(errorMsg)} */}
      <div className="bg-img">
        <div className="container">
          {/* {errorMsg && NotificationManager.error(errorMsg, "Info", 5000)} */}
          {/* {errorMsg && <p>{errorMsg}</p>} */}
          {/* {errorMsg && Notification(errorMsg)} */}
          {mainRoutes
            .filter(({ isRestricted }) => isRestricted)
            .map(
              ({ path, name }) =>
                path === pathname && (
                  <AuthTempForm
                    handleSubmit={handleSubmit}
                    btnName={name}
                    key={path}
                    errorMsg={errorMsg}
                  />
                )
            )}
        </div>
      </div>
    </>
  );
};

export default AuthPage;
