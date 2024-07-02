import { useState } from "react";
import Btn from "./Btn";

import { FaCloudDownloadAlt } from "react-icons/fa";

import FilterModal from "../modal/TableFilterModal";

function ReportBtn(props) {
  const [showModal, setShowModal] = useState(false);

  const { ReportComponet = null, handleApplyReport = () => {} } = props;

  if (!ReportComponet) {
    return null;
  }

  return (
    <>
      <Btn click={() => setShowModal(!showModal)}>
        <FaCloudDownloadAlt />
      </Btn>
      <FilterModal
        showFilter={showModal}
        setShowFilter={setShowModal}
        apply={handleApplyReport}
        headText={`Generate Report`}
      >
        {ReportComponet}
      </FilterModal>
    </>
  );
}

export default ReportBtn;
