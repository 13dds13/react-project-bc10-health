import React, { useState } from "react";
import { useSelector } from "react-redux";
import DailyCaloriesForm from "../../components/dailyCaloriesForm/DailyCaloriesForm";
import Modal from "../../components/modal";
import ModalText from "../../components/modalText";
import { getUserId } from "../../redux/auth/authSelectors";

const CalculatorPage = () => {
  const [isModal, setIsModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const getCalloriesData = (data) => setModalData(data);

  const showModal = () => setIsModal(!isModal);

  const id = useSelector(getUserId);
  return (
    <>
      <DailyCaloriesForm
        getCalloriesData={getCalloriesData}
        showModal={showModal}
        url={`/daily-rate/${id}`}
      />
      {isModal && (
        <Modal showModal={showModal}>
          <ModalText modalData={modalData} />
        </Modal>
      )}
    </>
  );
};

export default CalculatorPage;
