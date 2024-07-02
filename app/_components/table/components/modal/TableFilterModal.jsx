import React from "react";
import Filter from "./Filter";

export default function FilterModal(props) {
  const {
    children = null,
    apply = () => {},
    showFilter = false,
    setShowFilter = () => {},
    headText = "Filter Table",
  } = props;

  if (!showFilter) {
    return null;
  }

  return (
    <>
      <div className="h-screen flex overflow-x-clip overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-fit mx-auto">
          <div className="border-0 shadow-lg relative flex flex-col w-full items-end outline-none focus:outline-none">
            <div className="relative w-screen flex-auto h-screen">
              <Filter
                apply={apply}
                setShowFilter={setShowFilter}
                headText={headText}
              >
                {children}
              </Filter>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
