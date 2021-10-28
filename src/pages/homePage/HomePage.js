import React from "react";
import { Button } from "../../components/button/Button";
import CalloriesText from "../../components/calloriesText/CalloriesText";
import DailyCaloriesForm from "../../components/dailyCaloriesForm/DailyCaloriesForm";
import Modal from "../../components/modal";
import ModalText from "../../components/modalText";

import { HomePageStyled } from "./HomePageStyled";
// import styles from "./HomePage.module.css"

const HomePage = () => {
  const getCalloriesData = (data) => data;

  return (
    <div className="bg-img">
      <div className="container">
        <HomePageStyled>
          <h1 className="home__title">
            Просчитай свою суточную норму калорий прямо сейчас
          </h1>
          <div className="home__btn">
            <Button buttonName="Похудеть" />
          </div>
          <DailyCaloriesForm getCalloriesData={getCalloriesData} />
        </HomePageStyled>
        {/* <Modal>
          <ModalText />
        </Modal> */}
      </div>
    </div>
  );
};

export default HomePage;
