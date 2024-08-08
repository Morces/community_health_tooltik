"use client";

import { FileText } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useToast } from "../../../../../components/ui/use-toast";
import { ToastAction } from "../../../../../components/ui/toast";
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
import { useRouter } from "next/navigation";

const Card = ({ doc, refetchDocs }) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { toast } = useToast();
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`/api/resources/delete`, {
        params: {
          id: parseInt(doc?.id),
        },
      });

      const { data } = res;

      toast({
        variant: "success",
        title: "Success!",
        description: "Resource has been deleted successfully.",
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
      <div className="shadow-xl rounded-xl p-4 mb-4 border-t flex-1">
        <h2 className="font-bold text-lg mb-2">{doc.name}</h2>
        <p className="text-sm text-gray-600 mb-2">Type: {doc.resource_type}</p>
        <p className="text-sm text-gray-600 mb-4">{doc.description}</p>
        <div className="flex justify-between">
          <Link
            href={`${doc?.url}`}
            target="_blank"
            className="flex items-center"
          >
            <FileText className="text-md" />
            <span className="text-sm">View</span>
          </Link>
          <button
            onClick={onOpen}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Delete
          </button>
        </div>
      </div>

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
                Delete Resource
              </ModalHeader>
              <ModalBody>
                <p>
                  This action is irreversible. Are you sure you want to delete
                  this resource {doc?.name} ?
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
};

export default Card;
