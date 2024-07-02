import { FaRegCaretSquareRight } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import React, { useContext } from "react";

import TableContext from "./Provider/TableContext";

function TA(props) {
  const { handleView = null, id = null, children } = props;

  const { active = null, setActive = () => {} } = useContext(TableContext);

  if (active === undefined) {
    return null;
  }

  const handleOpenOption = () => {
    if (active === id) {
      setActive(null);
      return;
    }
    setActive(id);
  };

  return (
    <td>
      <div className=" flex items-center gap-x-2 relative ">
        <span
          className=" hover:text-primary active:opacity-50 text-xl cursor-pointer"
          onClick={handleOpenOption}
        >
          <SlOptionsVertical />
        </span>
        <ViewAction handleView={handleView} setActive={setActive} />
        <DropDown children={children} active={active} id={id} />
      </div>
    </td>
  );
}

function ViewAction(props) {
  const { handleView = null, setActive } = props;

  if (typeof handleView !== "function") {
    return null;
  }

  const btnHandleView = () => {
    setActive(null);
    handleView();
  };

  return (
    <span
      className=" hover:text-primary active:opacity-50 text-2xl cursor-pointer"
      onClick={btnHandleView}
    >
      <FaRegCaretSquareRight />
    </span>
  );
}

function DropDown(props) {
  const { children = null, active = null, id = null } = props;

  if (!active) {
    return null;
  }

  if (active !== id) {
    return null;
  }

  return (
    <ul
      className="absolute  bg-white shadow-md w-full p-2  z-50 "
      style={{ top: "110%" }}
    >
      {React.Children.map(children, (child, index) => {
        // Manipulate or render each child here
        return (
          <li className=" w-full cursor-pointer hover:text-primary border-b-2  ">
            {child}
          </li>
        );
      })}
    </ul>
  );
}

export default TA;
