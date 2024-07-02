import Btn from "./../btn/Btn";

import { GrNext, GrPrevious } from "react-icons/gr";

function Navigation(props) {
  const { pagination = {} } = props;
  const {
    total_docs = 0,
    page = 1,
    pages = 0,
    total = 100,
    hasNextPage = false,
    hasPrevPage = false,
    handleNext = () => {},
    handlePrev = () => {},
  } = pagination;

  const nextBtnClick = () => {
    if (!hasNextPage) {
      return;
    }
    handleNext();
  };

  const prevBtnClick = () => {
    if (!hasPrevPage) {
      return;
    }
    handlePrev();
  };

  return (
    <div className=" flex gap-4 items-center sm:justify-between sm:w-full">
      <span className=" text-auro-metal-saurus">
        {total_docs} of {total}
      </span>
      <div className=" flex items-center gap-x-2">
        <span style={{ opacity: hasPrevPage ? 1 : 0.4 }}>
          <Btn click={prevBtnClick}>
            <GrPrevious />
          </Btn>
        </span>
        <span
          className=" text-auro-metal-saurus"
          style={{ opacity: hasNextPage ? 1 : 0.4 }}
        >
          {page}/{pages}
        </span>
        <Btn click={nextBtnClick}>
          <GrNext />
        </Btn>
      </div>
    </div>
  );
}

export default Navigation;
