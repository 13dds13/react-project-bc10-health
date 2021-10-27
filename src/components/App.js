import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authLogout, authRefresh } from "../redux/auth/authOperations";
import {
  getIsAuth,
  getRefreshToken,
  getSid,
} from "../redux/auth/authSelectors";
import Header from "./header";
import Main from "./main";

const App = () => {
  const isAuth = useSelector(getIsAuth);
  const refreshToken = useSelector(getRefreshToken);
  const sid = useSelector(getSid);
  const dispatch = useDispatch();

  useEffect(() => {
    !isAuth && refreshToken && dispatch(authRefresh(refreshToken, sid));
  }, [dispatch, isAuth, refreshToken, sid]);

  // const onClick = () => dispatch(authLogout());
  return (
    <>
      {/* {isAuth && <button onClick={onClick}>Sign out</button>} */}
      <Header />
      <Main />
    </>
  );
};

export default App;
