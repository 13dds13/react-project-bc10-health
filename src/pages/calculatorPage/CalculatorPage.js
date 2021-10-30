import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DailyCaloriesForm from "../../components/dailyCaloriesForm/DailyCaloriesForm";
import Modal from "../../components/modal";
import ModalText from "../../components/modalText";
import { getIsAuth, getUserId } from "../../redux/auth/authSelectors";
import { setModalValue } from "../../redux/modal/modalAction";
import { getIsOpenModal } from "../../redux/modal/modalSelectors";
import {
  getDaySummary,
  getNotAllowedProducts,
} from "../../redux/user/userSelectors";

const CalculatorPage = () => {
  const [modalData, setModalData] = useState({});
  const getCalloriesData = (data) => setModalData(data);
  const notAllowedProducts = useSelector(getNotAllowedProducts);
  const { dailyRate } = useSelector(getDaySummary);
  const dispatch = useDispatch();
  const isOpenModal = useSelector(getIsOpenModal);
  const onHandleSetModal = () => dispatch(setModalValue());
  const loggetDataModal = {
    notAllowedProducts,
    dailyRate,
  };

  return (
    <>
      <DailyCaloriesForm
        getCalloriesData={getCalloriesData}
        showModal={onHandleSetModal}
      />
      {isOpenModal && (
        <Modal showModal={onHandleSetModal}>
          <ModalText
            modalData={loggetDataModal}
            onHandleSetModal={onHandleSetModal}
          />
        </Modal>
      )}
    </>
  );
};

export default CalculatorPage;
