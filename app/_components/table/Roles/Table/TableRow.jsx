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
  const router = useRouter();
  const { toast } = useToast();
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const handleView = () => {
    router.push(`/dashboard/roles/${doc?.id}`);
  };

  const handleEdit = () => {
    router.push(`/dashboard/roles/edit/${doc?.id}`);
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
      key="del"
      className="w-full mx-auto flex items-center justify-between"
    >
      <p className="text-center flex gap-2">
        <RiDeleteBin5Line className="text-red text-xl text-center" />
        <span className="text-red">Delete</span>
      </p>
    </div>,
  ];

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`/api/roles/delete`, {
        params: {
          id: parseInt(doc?.id),
        },
      });

      const { data } = res;

      toast({
        variant: "success",
        title: "Success!",
        description: "Role has been deleted successfully.",
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

  return (
    <>
      <TR>
        <TDT name="#" txt={doc?.id || "-"} />
        <TDT name="ROLE NAME" txt={doc?.name || "-"} />
        <TDT name="DESCRIPTION" txt={doc?.description || ""} />
        <TDT name="MEMBER COUNT" txt={doc?.members?.length || 0} />

        <TD>
          <TA
            name="Action"
            // handleView={handleView}
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
                Delete Role
              </ModalHeader>
              <ModalBody>
                <p>
                  This action is irreversible. Are you sure you want to delete
                  role {doc?.name} ?
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
