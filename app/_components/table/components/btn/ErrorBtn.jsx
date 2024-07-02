import Btn from "./Btn";
import { BiSolidErrorAlt } from "react-icons/bi";

function ErrorBtn(props) {
  const { handleError = () => {}, tableHasError = true } = props;

  if (!tableHasError) {
    return null;
  }

  return (
    <Btn click={handleError}>
      <span className="text-red animate-pulse">
        <BiSolidErrorAlt />
      </span>
    </Btn>
  );
}

export default ErrorBtn;
