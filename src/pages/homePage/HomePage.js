import React, { useState } from "react";
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

const HomePage = () => {
  const dispatch = useDispatch();
  const isOpenModal = useSelector(getIsOpenModal);
  const onHandleSetModal = () => dispatch(setModalValue());
  const isAuth = useSelector(getIsAuth);
  const [modalData, setModalData] = useState({});

  return (
    <>
      {/* <div className="bg-img"> */}
      <div className="container">
        {!isAuth ? (
          <HomePageStyled>
            <DailyCaloriesForm
              getCalloriesData={setModalData}
              showModal={onHandleSetModal}
            />
          </HomePageStyled>
        ) : (
          <Redirect to={mainRoutes[1].path} />
        )}
        {isOpenModal && (
          <Modal showModal={onHandleSetModal}>
            <ModalText
              modalData={modalData}
              onHandleSetModal={onHandleSetModal}
            />
          </Modal>
        )}
      </div>
      {/* </div> */}
    </>
  );
};

export default HomePage;
