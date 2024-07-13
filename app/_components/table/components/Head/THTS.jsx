import { useState } from "react";
import { BiSolidSortAlt } from "react-icons/bi";

export default function THTS(props) {
  const { txt = "Head", setOrder = () => {}, field = "" } = props;
  const [co, setCo] = useState(true);

  const handleOrder = () => {
    setOrder(co ? `${field}-asc` : `${field}-desc`);
    setCo((c) => !c);
  };

  return (
    <th
      className="  px-4 uppercase  py-2 cursor-pointer active:opacity-50"
      onClick={handleOrder}
    >
      <div className=" flex gap-x-2 items-center text-primary">
        <span className=" text-dark-gun-metal text-md">{txt}</span>
        <span className="">
          <BiSolidSortAlt />
        </span>
      </div>
    </th>
  );
}
