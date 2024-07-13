"use client";

import { TR, TDT, TA, TD } from "../../components";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useParams, useRouter } from "next/navigation";

function TableRow(props) {
  const { doc } = props;
  const router = useRouter();
  const { id } = useParams();

  const handleView = () => {
    router.push(`/dashboard/households/${id}/view-member/${doc?.id}`);
  };

  const handleEdit = () => {
    router.push(`/dashboard/households/${doc?.id}`);
  };

  return (
    <TR>
      <TDT name="#" txt={doc?.id || "-"} />
      <TDT name="NAME" txt={doc?.name || "-"} />
      <TDT name="AGE" txt={doc?.age || ""} />
      <TDT name="Relationship" txt={doc?.relationship || ""} />
      <TD>
        <TA name="Action" handleView={handleView} id={doc?.id}>
          <div className="w-full mx-auto flex items-center justify-between">
            <p className="text-center flex gap-2" onClick={handleEdit}>
              <FaRegEdit className="text-blue-500 text-xl text-center" />
              <span>Edit</span>
            </p>
          </div>
          <div
            onClick={""}
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
