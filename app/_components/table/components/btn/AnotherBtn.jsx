import Btn from "./Btn";

import { FaPlus } from "react-icons/fa";

function AnotherBtn(props) {
  const { handleAnotherBtn = null, anotherBtnTitle = "label" } = props;

  if (typeof handleAnotherBtn !== "function") {
    return null;
  }

  return (
    <div
      onClick={handleAnotherBtn}
      className="bg-primary cursor-pointer rounded-md p-2"
    >
      <div className="flex items-center gap-2">
        <span className="text-white font-bold">{anotherBtnTitle}</span>
      </div>
    </div>
  );
}

export default AnotherBtn;
