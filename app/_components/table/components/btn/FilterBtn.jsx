import { useState } from "react";
import Btn from "./Btn";

import { MdFilterAlt } from "react-icons/md";

import FilterModal from "../modal/TableFilterModal";

function Filter(props) {
  const {
    FilterComponent = null,
    handleAppyFilter = () => {},
    label = "",
  } = props;
  const [showModal, setShowModal] = useState(false);

  if (!FilterComponent) {
    return null;
  }

  return (
    <>
      <Btn click={() => setShowModal(!showModal)}>
        <MdFilterAlt />
      </Btn>
      <FilterModal
        showFilter={showModal}
        setShowFilter={setShowModal}
        apply={handleAppyFilter}
        headText={`Filter ${label}`}
      >
        {FilterComponent}
      </FilterModal>
    </>
  );
}

export default Filter;
