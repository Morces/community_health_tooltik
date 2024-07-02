import { useState } from "react";

import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";

function Limit(props) {
  const { pagination = {} } = props;

  const { limit = 10, setLimit = () => {} } = pagination;

  const [show, setShow] = useState(false);

  return (
    <div className=" flex items-center  gap-x-4">
      <span className=" text-auro-metal-saurus">Rows per page</span>
      <div className=" relative inline-block">
        <button
          onClick={() => setShow((c) => !c)}
          className="cursor-pointer active:opacity-50 shadow-md bg-neutral-white  text-xl font-bold py-1 px-2 rounded"
        >
          <div className="   flex gap-x-4 items-center text-auro-metal-saurus hover:text-primary">
            <span className=" text-auro-metal-saurus">{limit}</span>
            <span className="">
              {show && <MdArrowDropUp />}
              {!show && <MdArrowDropDown />}
            </span>
          </div>
        </button>
        {show && <DropDown setLimit={setLimit} setShow={setShow} />}
      </div>
    </div>
  );
}

function DropDown(props) {
  const { setLimit = () => {}, setShow } = props;
  const allowed = [10, 15, 20, 25];

  const handleSelect = (no) => {
    setLimit(no);
    setShow(false);
  };

  return (
    <ul className="absolute  bg-white shadow-md w-full p-2  z-50">
      {allowed.map((no, i) => {
        return (
          <li
            className=" border-b-2  cursor-pointer active:opacity-50"
            key={i}
            onClick={() => handleSelect(no)}
          >
            {no}
          </li>
        );
      })}
    </ul>
  );
}

export default Limit;
