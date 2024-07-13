"use client";

import { TR, TDT, TA, TD } from "../../components";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useRouter } from "next/navigation";

function TableRow(props) {
  const { doc } = props;
  const router = useRouter();

  const handleView = () => {
    router.push(`/dashboard/households/${doc?.id}`);
  };

  const handleEdit = () => {
    router.push(`/dashboard/households/${doc?.id}`);
  };

  return (
    <TR>
      <TDT name="#" txt={doc?.id || "-"} />
      <TDT name="HouseHold Head Name" txt={doc?.household_head_name || "-"} />
      <TDT name="Description" txt={doc?.description || ""} />
      <TDT name="Location" txt={doc?.location || ""} />
      <TDT name="Total Members" txt={doc?.househole_members?.length || "0"} />
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
