"use client";

import { Input } from "@nextui-org/input";
import { Textarea } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useToast } from "../../../../components/ui/use-toast";
import { ToastAction } from "../../../../components/ui/toast";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios from "axios";
import { FileText, Pencil } from "lucide-react";
import { UploadDropzone } from "@/app/_components/util/uploadthing";
import Link from "next/link";

export default function Page() {
  const [name, setName] = useState("");
  const [fileName, setFileName] = useState("");
  const [description, setDescription] = useState("");
  const [resourceType, setResourceType] = useState("");
  const [url, setUrl] = useState("");
  const { toast } = useToast();
  const router = useRouter();

  async function handleSubmit() {
    try {
      const res = await axios.post("/api/resources/add", {
        name,
        description,
        resource_type: resourceType,
        url,
      });

      if (res.statusText == "OK") {
        toast({
          variant: "success",
          title: "Success!",
          description: "Resource has been added successfully.",
        });

        router.push("/dashboard/resources");
      }
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  }

  return (
    <div className="pl-24 pr-5 max-md:px-0 max-md:pr-3 ml-6 max-md:ml-0">
      <div className="bg-white p-5 rounded-xl shadow-xl">
        <h3 className="text-center font-semibold text-xl">Add A Resource</h3>
        <div className="mt-5 flex gap-5 max-md:flex-wrap">
          <Input
            type="text"
            label="Name"
            labelPlacement="outside"
            variant="bordered"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
          />
          <Input
            type="text"
            label="Resource Type"
            labelPlacement="outside"
            variant="bordered"
            value={resourceType}
            onChange={(e) => setResourceType(e.target.value)}
            placeholder="Enter Resource Type"
          />
        </div>

        <div className="mt-6">
          <div className="col-span-full">
            <div className="flex w-full justify-between items-center mb-4">
              <label
                htmlFor="resource-url"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Upload PDF
              </label>
              {url && (
                <button
                  onClick={() => setUrl("")}
                  type="button"
                  className="flex space-x-2  bg-slate-900 rounded-md shadow text-slate-50  py-2 px-4"
                >
                  <Pencil className="w-5 h-5" />
                  <span>Change File</span>
                </button>
              )}
            </div>
            {url && (
              <Link href={url} target="_blank">
                <FileText />
                <span>View PDF : {fileName}</span>
              </Link>
            )}
            <UploadDropzone
              endpoint="pdfUploader"
              onClientUploadComplete={(res) => {
                setUrl(res[0].url);
                setFileName(res[0]?.name);
                toast({
                  variant: "success",
                  title: "Success!",
                  description: "Upload complete...",
                });
              }}
              onUploadError={(error) => {
                console.log(error);
                toast({
                  variant: "destructive",
                  title: "Uh oh! Something went wrong.",
                  description: "There was a problem with your upload.",
                  action: (
                    <ToastAction altText="Try again">Try again</ToastAction>
                  ),
                });
              }}
            />
          </div>
        </div>

        <div className="mt-6">
          <Textarea
            label="Description"
            labelPlacement="outside"
            placeholder="Enter your description"
            value={description}
            variant="bordered"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="mt-4 w-full flex items-center justify-center">
          <Button
            variant="solid"
            size="md"
            className="w-full"
            color="primary"
            onPress={handleSubmit}
          >
            Add Resource
          </Button>
        </div>
      </div>
    </div>
  );
}
