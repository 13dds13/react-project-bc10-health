import React from "react";
import { Button } from "../../components/button/Button";
import CalloriesText from "../../components/calloriesText/CalloriesText";
import { HomePageStyled } from "./HomePageStyled";
// import styles from "./HomePage.module.css"

const HomePage = () => {
  return (
    <div className="bg-img">
      <div className="container">
        <CalloriesText />
        <HomePageStyled>
          <h1 className="home__title">
            Просчитай свою суточную норму калорий прямо сейчас
          </h1>
          <div className="home__btn">
            <Button buttonName="Похудеть" />
          </div>
        </HomePageStyled>
      </div>
    </div>
  );
};

export default HomePage;
