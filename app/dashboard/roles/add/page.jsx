"use client";

import axios from "axios";
import { Textarea } from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/react";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const predefinedScreens = [
  { name: "organisations", can_view: false },
  { name: "roles", can_view: false },
  { name: "members", can_view: false },
  { name: "visits", can_view: false },
];

const Page = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [screens, setScreens] = useState(predefinedScreens);
  const [features, setFeatures] = useState([]);

  const handleScreenChange = (index, value) => {
    const newScreens = [...screens];
    newScreens[index].can_view = value;
    setScreens(newScreens);
  };

  const handleFeatureChange = (index, value) => {
    const newFeatures = [...features];
    newFeatures[index] = value;
    setFeatures(newFeatures);
  };

  const handleAddFeature = () => {
    setFeatures([...features, ""]);
  };

  async function handleSubmit() {
    try {
      const res = await axios.post("/api/roles/add", {
        name,
        description,
        screen: screens,
        features: features,
      });

      toast({
        variant: "success",
        title: "Success!",
        description: "Role has been added successfully.",
      });

      router.push("/dashboard/roles");
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
      <div className="flex flex-col space-y-6 rounded-lg shadow-2xl bg-white p-5 w-[85%] m-auto max-md:w-[95%]">
        <h3 className="text-center font-semibold text-xl">Add Role</h3>
        <div className="mt-5">
          <Input
            type="text"
            label="Name"
            labelPlacement="outside"
            variant="bordered"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
          />
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

        <div className="mt-6">
          <h4 className="font-semibold">Screens</h4>
          {screens.map((screen, index) => (
            <div key={index} className="flex items-center space-x-4 mt-4">
              <span>{screen.name}</span>
              <Checkbox
                size="md"
                checked={screen.can_view}
                onChange={(e) => handleScreenChange(index, e.target.checked)}
              >
                Can View?
              </Checkbox>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <h4 className="font-semibold">Features</h4>
          {features.map((feature, index) => (
            <div key={index} className="flex space-x-4 mt-4">
              <Input
                type="text"
                label="Feature"
                labelPlacement="outside"
                variant="bordered"
                value={feature}
                onChange={(e) => handleFeatureChange(index, e.target.value)}
                placeholder="Enter Feature"
              />
            </div>
          ))}
          <Button variant="ghost" size="sm" onPress={handleAddFeature}>
            Add Another Feature
          </Button>
        </div>

        <div className="mt-2 w-full flex items-center justify-center">
          <Button
            variant="solid"
            size="md"
            className="w-full"
            color="primary"
            onPress={handleSubmit}
          >
            Add Role
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
