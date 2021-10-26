import React from 'react'
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({path, exact, component, isAuth}) => {
  return (
    isAuth ? (
      <Route path={path} exact={exact} component={component}/>
    ) : (<Redirect to='/singin'/>)
  );
}

export default PrivateRoute;