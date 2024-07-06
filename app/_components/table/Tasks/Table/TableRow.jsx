"use client";

import { TR, TDT, TA, TD } from "../../components";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useRouter } from "next/navigation";

function TableRow(props) {
  const { doc } = props;
  const router = useRouter();

  const handleView = () => {
    router.push(`/dashboard/tasks/${doc?.id}`);
  };

  const handleEdit = () => {
    router.push(`/dashboard/tasks/${doc?.id}`);
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
      {/* <TDT
        name="ALLOCATED PERIOD FROM"
        txt={doc?.allocation_period_from || ""}
      />
      <TDT name="ALLOCATED PERIOD TO" txt={doc?.allocation_period_to || ""} /> */}
      <TDT name="ALLOCATED AREA" txt={doc?.allocation_area || ""} />
      <TDT
        name="TASK STATUS"
        txt={doc?.task_status?.name || ""}
      />
      <TD>
        <TA name="Action" handleView={handleView} id={doc?.id}>
          <div className="w-full mx-auto flex items-center justify-between">
            <p className="text-center flex gap-2" onClick={handleEdit}>
              <FaRegEdit className="text-blue-500 text-xl text-center" />
              <span>Edit</span>
            </p>
          </div>
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
