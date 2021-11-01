import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DailyCaloriesForm from "../../components/dailyCaloriesForm/DailyCaloriesForm";
import Modal from "../../components/modal";
import ModalText from "../../components/modalText";
// import { getIsAuth, getUserId } from "../../redux/auth/authSelectors";
import { setModalValue } from "../../redux/modal/modalAction";
import { getIsOpenModal } from "../../redux/modal/modalSelectors";
import { getUserData } from "../../redux/user/userOperations";
import {
  getDaySummary,
  getNotAllowedProducts,
  getUserStat,
} from "../../redux/user/userSelectors";

const CalculatorPage = () => {
  const [, setModalData] = useState({});
  const notAllowedProducts = useSelector(getNotAllowedProducts);
  const { dailyRate } = useSelector(getDaySummary);
  const dispatch = useDispatch();
  const isOpenModal = useSelector(getIsOpenModal);
  const userStat = useSelector(getUserStat);

  const getCalloriesData = (data) => setModalData(data);

  const onHandleSetModal = () => dispatch(setModalValue());

  const loggetDataModal = {
    notAllowedProducts,
    dailyRate,
  };

  useEffect(() => {
    dailyRate && !userStat?.weight && dispatch(getUserData());
  }, [dailyRate, dispatch, userStat?.weight]);

  const formikData = (userStat?.weight && { ...userStat }) || {
    weight: "",
    height: "",
    age: "",
    desiredWeight: "",
    bloodType: "",
  };

  return (
    <>
      <div className="container">
        <DailyCaloriesForm
          getCalloriesData={getCalloriesData}
          showModal={onHandleSetModal}
          formikData={{ ...formikData }}
        />
        {isOpenModal && (
          <Modal showModal={onHandleSetModal}>
            <ModalText
              modalData={loggetDataModal}
              onHandleSetModal={onHandleSetModal}
            />
          </Modal>
        )}
      </div>
    </>
  );
};

export default CalculatorPage;
