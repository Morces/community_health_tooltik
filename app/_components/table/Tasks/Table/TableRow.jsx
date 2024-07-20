"use client";

import { TR, TDT, TA, TD } from "../../components";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { convDate } from "@/app/_components/util/Time";
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

  const handleView = () => {
    router.push(`/dashboard/tasks/view/${doc?.id}`);
  };
  const handleAllocate = () => {
    router.push(`/dashboard/tasks/allocate/${doc?.id}`);
  };

  const handleEdit = () => {
    router.push(`/dashboard/tasks/edit/${doc?.id}`);
  };

  return (
    <TR>
      <TDT name="#" txt={doc?.id || "-"} />
      <TDT name="TASK NAME" txt={doc?.name || "-"} />
      <TDT
        name="ALLOCATE TO"
        txt={doc?.members_tasks_allocated_toTomembers?.name || ""}
      />
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
        <TA name="Action" id={doc?.id}>
          <div className="w-full mx-auto flex items-center justify-between">
            <p className="text-center flex gap-2" onClick={handleEdit}>
              <FaRegEdit className="text-blue-500 text-xl text-center" />
              <span>Edit</span>
            </p>
          </div>
          {doc?.task_status?.name == "allocate" ? (
            <div className="w-full mx-auto flex items-center justify-between">
              <p className="text-center flex gap-2" onClick={handleAllocate}>
                <HiOutlineShare className="text-green-500 text-xl text-center" />
                <span>Allocate</span>
              </p>
            </div>
          ) : (
            <div className="w-full mx-auto flex items-center justify-between">
              <p className="text-center flex gap-2" onClick={openModal}>
                <GoCheckCircle className="text-green-500 text-xl text-center" />
                <span>Mark done</span>
              </p>
            </div>
          )}
          <div
            onClick={() => {}}
            className="w-full mx-auto flex items-center justify-between"
          >
            <p className="text-center flex gap-2">
              <RiDeleteBin5Line className="text-red text-xl text-center" />
              <span className="text-red">Delete</span>
            </p>
          </div>
        </TA>
      </TD>
    </TR>
  );
}

export default TableRow;
