import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import { getIsAuth } from "../../redux/auth/authSelectors";
import { mainRoutes } from "../../routes/mainRoutes";
import PrivateRoute from "../../routes/PrivateRoute";
import PublicRoute from "../../routes/PublicRoute";
import { MainStyled } from "./MainStyled";
import Loader from "react-loader-spinner";
import { NotificationContainer } from "react-notifications";

const Main = () => {
  const isAuth = useSelector(getIsAuth);

  return (
    <>
      <MainStyled>
        <Suspense
          fallback={
            <Loader
              type="ThreeDots"
              color="var(--accent-colour)"
              height={80}
              width={80}
              style={{
                textAlign: "center"
              }}
            />
          }
        >
          <Switch>
            {mainRoutes.map(({ path, exact, component, isPrivate, isRestricted }) =>
              isPrivate ? (
                <PrivateRoute path={path} exact={exact} component={component} isAuth={isAuth} key={path} />
              ) : (
                <PublicRoute
                  path={path}
                  exact={exact}
                  component={component}
                  isAuth={isAuth}
                  isRestricted={isRestricted}
                  key={path}
                />
              )
            )}
          </Switch>
        </Suspense>
      </MainStyled>
      <NotificationContainer />
    </>
  );
};

export default Main;
