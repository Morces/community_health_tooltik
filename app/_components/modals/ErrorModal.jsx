import React from "react";
import BasicModal from "./BasicModal";
import { MdErrorOutline } from "react-icons/md";

const ErrorModal = ({ showErrorModal, setShowErrorModal, message }) => {
  return (
    <BasicModal showModal={showErrorModal} setShowModal={setShowErrorModal}>
      <div className="p-4 flex flex-col justify-center items-center">
        <MdErrorOutline className="text-6xl text-red-500 animate-pulse" />
        <h1 className="text-2xl font-bold text-red-500">{message}</h1>
      </div>
    </BasicModal>
  );
};

export default ErrorModal;
