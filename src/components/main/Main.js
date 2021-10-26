import React, { Suspense } from "react";
import { Switch } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";
import PrivateRoute from "../../routes/PrivateRoute";
import PublicRoute from "../../routes/PublicRoute";
import isAuth from "../../ТУТ_ТИМЧАСОВЕ_ЗНАЧЕННЯ_isAuth"; // використовується, поки немає STATE
import CalloriesText from "../calloriesText/CalloriesText";
import { MainStyled } from "./MainStyled";

const Main = () => {
  return (
    <MainStyled>
      {/* <CalloriesText /> */}
      <Suspense fallback={<h2>...loading</h2>}>
        <Switch>
          {mainRoutes.map(
            ({ path, exact, component, isPrivate, isRestricted }) =>
              isPrivate ? (
                <PrivateRoute
                  path={path}
                  exact={exact}
                  component={component}
                  isAuth={isAuth}
                  key={path}
                />
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
  );
};

export default Main;
