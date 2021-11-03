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
  getUserStat,
  getNotAllowedProducts,
} from "../../redux/user/userSelectors";

const CalculatorPage = () => {
  const [, setModalData] = useState({});
  const notAllowedProducts = useSelector(getNotAllowedProducts);
  const dispatch = useDispatch();
  const isOpenModal = useSelector(getIsOpenModal);
  const userStat = useSelector(getUserStat);

  // const getCalloriesData = (data) => setModalData(data); //функция зацикливает
  // useEffect DailyCaloriesForm. Достаточно просто передать setModalData

  const onHandleSetModal = () => dispatch(setModalValue());

  const AuthUserModalData = {
    notAllowedProducts,
    dailyRate: userStat?.dailyRate,
  };

  useEffect(() => {
    userStat?.dailyRate && !userStat?.weight && dispatch(getUserData());
  }, [userStat?.dailyRate, dispatch, userStat?.weight]);

  const formikData = (userStat?.dailyRate && { ...userStat }) || {
    weight: "",
    height: "",
    age: "",
    desiredWeight: "",
    bloodType: "1",
  };

  return (
    <>
      <div className="container">
        <DailyCaloriesForm
          getCalloriesData={setModalData}
          showModal={onHandleSetModal}
          formikData={{ ...formikData }}
        />
        {isOpenModal && (
          <Modal showModal={onHandleSetModal}>
            <ModalText
              modalData={AuthUserModalData}
              onHandleSetModal={onHandleSetModal}
            />
          </Modal>
        )}
      </div>
    </>
  );
};

export default CalculatorPage;
