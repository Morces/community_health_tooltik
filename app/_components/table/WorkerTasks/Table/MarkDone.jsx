import React from "react";
import BasicModal from "../../../modals/BasicModal";
import { Button } from "@nextui-org/react";

const Markdone = ({ showMarkDone, setShowMarkDone, markDone }) => {
  return (
    <BasicModal showModal={showMarkDone} setShowModal={setShowMarkDone}>
      <div className="p-4 flex flex-col justify-center items-center">
        <h3 className="">Are you sure you want to mark this task as done?</h3>
        <div className="flex justify-between items-center w-full mt-5">
          <Button
            variant="solid"
            size="md"
            color="secondary"
            onPress={() => setShowMarkDone(false)}
          >
            Cancel
          </Button>
          <Button variant="solid" size="md" color="primary" onPress={markDone}>
            Mark Done
          </Button>
        </div>
      </div>
    </BasicModal>
  );
};

export default Markdone;
