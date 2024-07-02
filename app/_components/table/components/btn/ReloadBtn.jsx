import { IoReload } from "react-icons/io5";
import Btn from "./Btn";

function ReloadBtn(props) {
  const { handleReload = null } = props;

  if (typeof handleReload !== "function") {
    return null;
  }

  return (
    <Btn click={handleReload}>
      <IoReload />
    </Btn>
  );
}

export default ReloadBtn;
