import React from "react";

import { MdClose } from "react-icons/md";

export default function Filter(props) {
  const {
    apply = () => {},
    setShowFilter = () => {},
    headText = "Filter",
    children = null,
  } = props;

  return (
    <div className="h-full flex w-full justify-end">
      <div className="w-fit bg-white h-full overflow-y-auto flex flex-col rounded-l-lg">
        <FilterTopBar headText={headText} setShowFilter={setShowFilter} />
        <div className="px-6 py-6">{children}</div>
        <div className="flex-1"></div>
        <div className="w-full flex flex-row sticky">
          <div
            onClick={() => setShowFilter(false)}
            className="cursor-pointer w-fit flex flex-row justify-center items-center px-8 py-2 font-DM-Bold text-base text-black active:opacity-20"
          >
            Cancel
          </div>
          <div
            onClick={apply}
            className="flex-1 cursor-pointer flex flex-row justify-center items-center px-6 py-2 font-DM-Bold text-base bg-primary text-white active:opacity-25"
          >
            Apply
          </div>
        </div>
      </div>
    </div>
  );
}

const FilterTopBar = (props) => {
  // Renamed prop to onClick

  const { headText = "Filter Table", setShowFilter } = props;
  return (
    <div
      className="flex justify-between items-center px-6 mt-4"
      style={{ minWidth: "320px" }}
    >
      <p className="text-cadet_grey text-2xl tracking-wider">{headText}</p>
      <p
        onClick={() => setShowFilter(false)} // Changed prop to onClick
        className="text-3xl active:opacity-20 text-black cursor-pointer active:text-primary"
      >
        <MdClose />
      </p>
    </div>
  );
};
