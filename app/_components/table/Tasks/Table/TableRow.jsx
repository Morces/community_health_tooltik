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
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import axios from "axios";
import { useToast } from "../../../../../components/ui/use-toast";
import { ToastAction } from "../../../../../components/ui/toast";

function TableRow(props) {
  const { doc, refetchDocs } = props;
  const router = useRouter();
  const { toast } = useToast();
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

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

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`/api/tasks/delete`, {
        params: {
          id: parseInt(doc?.id),
        },
      });

      toast({
        variant: "success",
        title: "Success!",
        description: "Task has been deleted successfully.",
      });
      refetchDocs();
      onClose();
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  };

  const dropdownItems = [
    doc?.task_status?.name == "pending" && (
      <div
        className="w-full mx-auto flex items-center justify-between"
        key="edit"
      >
        <p className="text-center flex gap-2" onClick={handleEdit}>
          <FaRegEdit className="text-blue-500 text-xl text-center" />
          <span>Edit</span>
        </p>
      </div>
    ),
    doc?.task_status?.name == "pending" ? (
      <div
        className="w-full mx-auto flex items-center justify-between"
        key="allocate"
      >
        <p className="text-center flex gap-2" onClick={handleAllocate}>
          <HiOutlineShare className="text-green-500 text-xl text-center" />
          <span>Allocate</span>
        </p>
      </div>
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
    <div
      onClick={onOpen}
      className="w-full mx-auto flex items-center justify-between"
      key="delete"
    >
      <p className="text-center flex gap-2">
        <RiDeleteBin5Line className="text-red text-xl text-center" />
        <span className="text-red">Delete</span>
      </p>
    </div>,
  ];

  return (
    <>
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
          <TA
            name="Action"
            id={doc?.id}
            dropdownItems={dropdownItems}
            // handleView={handleView}
          />
        </TD>
      </TR>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center">
                Delete Task
              </ModalHeader>
              <ModalBody>
                <p>
                  This action is irreversible. Are you sure you want to delete
                  task {doc?.name} ?
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={handleDelete}>
                  Delete
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default TableRow;
