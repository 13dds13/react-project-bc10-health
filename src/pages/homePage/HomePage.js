import React, { useState } from "react";
import { Button } from "../../components/button/Button";
import CalloriesText from "../../components/calloriesText/CalloriesText";
import { useSelector, useDispatch } from "react-redux";
import DailyCaloriesForm from "../../components/dailyCaloriesForm/DailyCaloriesForm";
import Modal from "../../components/modal";
import ModalText from "../../components/modalText";

import { HomePageStyled } from "./HomePageStyled";
import { setDiaryValue } from "../../redux/isOpenModalForDiaryMobilePage/diaryModalAction";
// import styles from "./HomePage.module.css"

const HomePage = () => {

  const dispatch = useDispatch();
  const isOpenModal = useSelector((state) => state.diaryModal.isOpenModal);
  const onHandleSetModal = () => dispatch(setDiaryValue());

  const [isModal, setIsModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const getCalloriesData = (data) => setModalData(data);

  // const showModal = () => setIsModal(!isModal);

  return (
    <>
      <HomePageStyled>
        <DailyCaloriesForm
          getCalloriesData={getCalloriesData}
          showModal={onHandleSetModal}
          url="/daily-rate"
        />
      </HomePageStyled>
      {isOpenModal && (
        <Modal showModal={onHandleSetModal}>
          <ModalText modalData={modalData} />
        </Modal>
      )}
    </>
  );
};

export default HomePage;
