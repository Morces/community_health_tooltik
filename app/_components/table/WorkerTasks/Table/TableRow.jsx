"use client";

import { TR, TDT, TA, TD } from "../../components";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { convDate } from "../../../../_components/util/Time";
import { HiOutlineShare } from "react-icons/hi";
import { useContext } from "react";
import TableContext from "../Provider/TableContext";
import { GoCheckCircle } from "react-icons/go";

function TableRow(props) {
  const { doc } = props;
  const router = useRouter();

  const { setTaskId, setShowMarkDone } = useContext(TableContext);

  function openModal() {
    setTaskId(doc.id);
    setShowMarkDone(true);
  }

  const dropdownItems = [
    doc?.task_status?.name == "done" ? (
      <div
        className="w-full mx-auto flex items-center justify-between"
        key="done"
      ></div>
    ) : (
      <div
        className="w-full mx-auto flex items-center justify-between"
        key="mark-done"
      >
        <p className="text-center flex gap-2" onClick={openModal}>
          <GoCheckCircle className="text-green-500 text-xl text-center" />
          <span>Mark done</span>
        </p>
      </div>
    ),
  ];

  return (
    <TR>
      <TDT name="#" txt={doc?.id || "-"} />
      <TDT name="TASK NAME" txt={doc?.name || "-"} />

      <TDT
        name="ALLOCATED BY"
        txt={doc?.members_tasks_allocated_byTomembers?.name || ""}
      />
      <TDT
        name="ALLOCATED PERIOD FROM"
        txt={convDate(doc?.allocation_period_from) || ""}
      />
      <TDT
        name="ALLOCATED PERIOD TO"
        txt={convDate(doc?.allocation_period_to) || ""}
      />
      <TDT name="ALLOCATED AREA" txt={doc?.allocation_area || ""} />
      <TDT
        name="TASK STATUS"
        txt={
          <div
            className={`px-4 rounded-2xl w-fit ${
              doc?.task_status?.name == "pending"
                ? "bg-red-100"
                : doc?.task_status?.name == "done"
                ? "text-green-200"
                : doc?.task_status?.name == "allocated"
                ? "text-orange-100"
                : ""
            }`}
          >
            <small
              className={`${
                doc?.task_status?.name == "pending"
                  ? "text-red-500"
                  : doc?.task_status?.name == "done"
                  ? "text-green-500"
                  : doc?.task_status?.name == "allocated"
                  ? "text-orange-500"
                  : ""
              }`}
            >
              {doc?.task_status?.name || ""}
            </small>
          </div>
        }
      />
      <TD>
        <TA
          name="Action"
          id={doc?.id}
          dropdownItems={dropdownItems}
          // handleView={handleView}
        />
      </TD>
    </TR>
  );
}

export default TableRow;
