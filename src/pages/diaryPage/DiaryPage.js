import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../components/modal";
import { setDiaryValue } from "../../redux/isOpenModalForDiaryMobilePage/diaryModalAction";

const DiaryPage = () => {
  const isModalOpen = useSelector((state) => state.diaryModal.isOpenModal);

  const dispatch = useDispatch();
  const onHandleCliсk = () => dispatch(setDiaryValue());

  console.log(isModalOpen);
  return (
    <>
      <h2>DiaryPage</h2>
      <button type="button" onClick={onHandleCliсk}>
        openModal
      </button>
      {isModalOpen && (
        <Modal hideModal={onHandleCliсk}>
          <h2>тут форма</h2>
        </Modal>
      )}
    </>
  );
};

export default DiaryPage;
