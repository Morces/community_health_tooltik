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
    router.push(`/dashboard/households/${id}/edit-member/${doc?.id}`);
  };

  const items = [
    <div
      className="w-full mx-auto flex items-center justify-between"
      key="edit"
    >
      <p className="text-center flex gap-2" onClick={handleEdit}>
        <FaRegEdit className="text-blue-500 text-xl text-center" />
        <span>Edit</span>
      </p>
    </div>,
    <div
      onClick={""}
      key="del"
      className="w-full mx-auto flex items-center justify-between"
    >
      <p className="text-center flex gap-2">
        <RiDeleteBin5Line className="text-red text-xl text-center" />
        <span className="text-red">Delete</span>
      </p>
    </div>,
  ];

  return (
    <TR>
      <TDT name="#" txt={doc?.id || "-"} />
      <TDT
        name="VITALS"
        txt={`Temp: ${doc?.vitals?.temp}°C, Height: ${doc?.vitals?.height}, Weignt: ${doc?.vitals?.weight}`}
      />
      <TDT
        name="DIAGNOSIS"
        txt={`Allergen: ${doc?.diagnosis?.allergen}, Severity: ${doc?.diagnosis?.severity}`}
      />
      <TDT
        name="ALLERGIES"
        txt={`Condition: ${doc?.allergies?.condition}, Notes: ${doc?.allergies?.notes}`}
      />
      <TD>
        <TA
          name="Action"
          handleView={handleView}
          id={doc?.id}
          dropdownItems={items}
        ></TA>
      </TD>
    </TR>
  );
}

export default TableRow;
