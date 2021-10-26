import React from "react";
import { useDispatch } from "react-redux";
// import { mainRoutes } from "../routes/mainRoutes";
import { authRegistration } from "../../redux/auth/authOperations";
import AuthTempForm from "../../components/authTempForm/";
// import { useLocation } from "react-router";

const AuthPage = () => {
  const dispatch = useDispatch();
  // const { pathname } = useLocation();
  const handleSubmit = (userData) => {
    // pathname === "/signup"

    dispatch(authRegistration(userData));
  };
  return <AuthTempForm handleSubmit={handleSubmit} btnName={"Sign up"} />;
};

export default AuthPage;
