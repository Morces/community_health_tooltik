import Btn from "./Btn";

import { FaPlus } from "react-icons/fa";

function AddBtn(props) {
  const { handleAdd = null } = props;

  if (typeof handleAdd !== "function") {
    return null;
  }

  return (
    <div
      onClick={handleAdd}
      className="bg-primary cursor-pointer rounded-md p-2"
    >
      <div className="flex items-center gap-2">
        <p className="text-white font-bold">
          <FaPlus />
        </p>
        <span className="text-white font-bold">Add</span>
      </div>
    </div>
  );
}

export default AddBtn;
