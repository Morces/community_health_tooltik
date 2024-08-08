"use client";

import { TR, TDT, TA, TD } from "../../components";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useRouter } from "next/navigation";
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
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { toast } = useToast();
  const router = useRouter();

  const handleView = () => {
    router.push(`/dashboard/households/${doc?.id}`);
  };

  const handleEdit = () => {
    router.push(`/dashboard/households/edit/${doc?.id}`);
  };

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`/api/households/delete`, {
        params: {
          id: parseInt(doc?.id),
        },
      });

      const { data } = res;

      toast({
        variant: "success",
        title: "Success!",
        description: "Household has been deleted successfully.",
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
      onClick={onOpen}
      key={"delete"}
      className="w-full mx-auto flex items-center justify-between"
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
        <TDT name="HouseHold Head Name" txt={doc?.household_head_name || "-"} />
        <TDT name="Description" txt={doc?.description || ""} />
        <TDT name="Location" txt={doc?.location || ""} />
        <TDT name="Total Members" txt={doc?.househole_members?.length || "0"} />
        <TD>
          <TA
            name="Action"
            handleView={handleView}
            id={doc?.id}
            dropdownItems={items}
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
                Delete Household
              </ModalHeader>
              <ModalBody>
                <p>
                  This action is irreversible. Are you sure you want to delete
                  household {doc?.household_head_name} ?
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
