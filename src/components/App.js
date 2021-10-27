import React from "react";
import AuthPage from "../pages/authPage/AuthPage";
import Header from "./header";
import Main from "./main";

const App = () => {
  return (
    <>
      <div className="container">
      <Header /></div>
      <Main />
      <div className="container">
      <AuthPage /></div>
    </>
  );
};

export default App;
