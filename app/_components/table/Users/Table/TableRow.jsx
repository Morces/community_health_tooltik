"use client";

import { TR, TDT, TA, TD } from "../../components";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useRouter } from "next/navigation";

function TableRow(props) {
  const { doc } = props;
  const router = useRouter();

  return (
    <TR>
      <TDT name="#" txt={doc?.id || "-"} />
      <TDT name="Member Name" txt={doc?.name || "-"} />
      <TDT name="Phone" txt={doc?.phone || ""} />
      <TDT name="Email" txt={doc?.email || ""} />
      <TDT name="Role" txt={doc?.roles?.name || ""} />

      <TD>
        <TA
          name="Action"
          handleView={() => router.push(`member-details/${doc?.id}`)}
          id={doc?.id}
        >
          <div className="w-full mx-auto flex items-center justify-between">
            <p
              className="text-center flex gap-2"
              onClick={() => router.push(`edit/${doc?.id}`)}
            >
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
