import Limit from "./Limit";

import Navigation from "./Navigation";

export default function Pagination(props) {
  const { showPagination = true } = props;

  if (!showPagination) {
    return false;
  }

  return (
    <div className=" w-full bg-white px-4 flex justify-between max-md:flex-wrap rounded-b-md py-2">
      <Limit {...props} />
      <Navigation {...props} />
    </div>
  );
}
