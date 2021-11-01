import React, { useState } from "react";
// import { Button } from "../../components/button/Button";
// import CalloriesText from "../../components/calloriesText/CalloriesText";
import { useSelector, useDispatch } from "react-redux";
import DailyCaloriesForm from "../../components/dailyCaloriesForm/DailyCaloriesForm";
import Modal from "../../components/modal";
import ModalText from "../../components/modalText";
import { mainRoutes } from "../../routes/mainRoutes";
import { HomePageStyled } from "./HomePageStyled";
import { getIsOpenModal } from "../../redux/modal/modalSelectors";
import { setModalValue } from "../../redux/modal/modalAction";
import { Redirect } from "react-router";
import { getIsAuth } from "../../redux/auth/authSelectors";

// import styles from "./HomePage.module.css"

const HomePage = () => {
  const dispatch = useDispatch();
  const isOpenModal = useSelector(getIsOpenModal);
  const onHandleSetModal = () => dispatch(setModalValue());
  const isAuth = useSelector(getIsAuth);
  // const [isModal, setIsModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const getCalloriesData = (data) => setModalData(data);
  

  // const showModal = () => setIsModal(!isModal);

  return (
    <>
      {!isAuth ? (
        <HomePageStyled>
          <DailyCaloriesForm
            getCalloriesData={getCalloriesData}
            showModal={onHandleSetModal}
          />
        </HomePageStyled>
      ) : (
        <Redirect to={mainRoutes[2].path} />
      )}
      {isOpenModal && (
        <Modal showModal={onHandleSetModal}>
          <ModalText
            modalData={modalData}
            onHandleSetModal={onHandleSetModal}
          />
        </Modal>
      )}
    </>
  );
};

export default HomePage;
