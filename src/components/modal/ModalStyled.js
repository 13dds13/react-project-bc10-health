import styled from "styled-components";

export const ModalStyled = styled.div`
  @media screen and (max-width: 767px) {
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      

      /* ================= */
      margin-top: ${(props) => (props.isOpenDiaryModal ? "125px" : "100px")};
      /* ================= */

      width: 100vw;
      height: 700px;
      /* padding-left: 20px; */
      /* display: flex;
      justify-content: center;

      align-items: center; */
      /* ================= */
      background-color: ${(props) =>
        props.isOpenDiaryModal
          ? "var(--main-bg-color)"
          : "var(--bg-modal-accent-colour)"};
      /* ================= */

      z-index: 1200;
      overflow: hidden;

      .Modal {
        position: absolute;
        /* background-color: #3d3d3d; */
        border-radius: 14px;
        z-index: 999;
      }
    }
  }
  @media screen and (min-width: 767px) {
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--modal--bg-colour);
      z-index: 999;
    }

    .modal {
      max-width: calc(100vw - 48px);
      max-height: calc(100vh - 24px);
    }
  }

  @media screen and (max-width: 767px) {
    .modal {
      /* margin-top: auto; */
      /* overflow: scroll; */
    }
  }
`;
