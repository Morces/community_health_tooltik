import React from "react";

function BasicModal(props) {
  const { children, showModal = false, setShowModal = () => {} } = props;

  if (!showModal) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-0 z-50 flex justify-center items-center mx-2">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div
            className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none rounded-md"
            style={{
              backgroundColor: "rgba(249, 250, 254, 1)",
            }}
          >
            <div className="w-full flex justify-end items-center px-4 py-2 rounded-t-md text-white">
              <span
                onClick={() => setShowModal(false)}
                className="text-3xl font-bold text-black cursor-pointer "
              >
                X
              </span>
            </div>

            <div className="relative px-6 py-4 flex-auto w-full">
              {children}
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </>
  );
}
export default BasicModal;
