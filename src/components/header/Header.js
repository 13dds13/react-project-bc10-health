import React from "react";
import Navigation from "../navigation";
import { HeaderStyled } from "./HeaderStyled";

const Header = () => {
  return (
    <HeaderStyled>
      <Navigation />
    </HeaderStyled>
  );
};

export default Header;
