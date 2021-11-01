import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authRefresh } from "../redux/auth/authOperations";
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

  return (
    <>
      {/* <div className="bg-img">
        <div className="container"> */}
          <Header />
          <Main />
        {/* </div>
      </div> */}
    </>
  );
};

export default App;
