import React, { useState } from "react";
import { Button } from "../../components/button/Button";
import CalloriesText from "../../components/calloriesText/CalloriesText";
import DailyCaloriesForm from "../../components/dailyCaloriesForm/DailyCaloriesForm";
import Modal from "../../components/modal";
import ModalText from "../../components/modalText";

import { HomePageStyled } from "./HomePageStyled";
// import styles from "./HomePage.module.css"

const HomePage = () => {
  const [isModal, setIsModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const getCalloriesData = (data) => setModalData(data);

  const showModal = () => setIsModal(!isModal);

  return (
    <>
      <HomePageStyled>
        <DailyCaloriesForm
          getCalloriesData={getCalloriesData}
          showModal={showModal}
          url="/daily-rate"
        />
      </HomePageStyled>
      {isModal && (
        <Modal showModal={showModal}>
          <ModalText modalData={modalData} />
        </Modal>
      )}
    </>
  );
};

export default HomePage;
