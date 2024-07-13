"use client";

import { TR, TDT, TA, TD } from "../../components";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { convDate2 } from "@/app/_components/util/Time";

function TableRow(props) {
  const { doc } = props;
  const router = useRouter();

  const handleView = () => {
    router.push(`/dashboard/tasks/view/${doc?.id}`);
  };

  const handleEdit = () => {
    router.push(`/dashboard/tasks/edit/${doc?.id}`);
  };

  return (
    <TR>
      <TDT name="#" txt={doc?.id || "-"} />
      <TDT name="TASK NAME" txt={doc?.tasks?.name || "-"} />
      <TDT name="VISIT TYPE" txt={doc?.visit_type?.name || ""} />
      <TDT
        name="ALLOCATED TO"
        txt={doc?.tasks?.members_tasks_allocated_toTomembers?.name || ""}
      />
      <TDT name="COMMENT" txt={doc?.comment || ""} />
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
