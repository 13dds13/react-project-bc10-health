import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { authRefresh } from "../redux/auth/authOperations";
import {
  getIsAuth,
  getRefreshToken,
  getSid,
} from "../redux/auth/authSelectors";
import { tokensLifeDuration } from "../db.json";
import Header from "./header";
import Main from "./main";

const App = () => {
  const isAuth = useSelector(getIsAuth);
  const refreshToken = useSelector(getRefreshToken);
  const sid = useSelector(getSid);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    isAuth &&
      setTimeout(() => {
        dispatch(authRefresh(refreshToken, sid));
      }, tokensLifeDuration);
  }, [dispatch, isAuth, refreshToken, sid]);

  useEffect(() => {
    !isAuth && refreshToken && dispatch(authRefresh(refreshToken, sid));
  }, [dispatch, isAuth, refreshToken, sid]);

  return (
    <>
      {pathname === "/diary" || pathname === "/calculator" ? (
        <div>
          <Header />
          <Main />
        </div>
      ) : (
        <div className="bg-img">
          <Header />
          <Main />
        </div>
      )}
    </>
  );
};

export default App;
