import React from "react";

import useDevice from "../../../hooks/useDevice";

export default function Thead(props) {
  const { children } = props;
  const device = useDevice();
  if (device === "sm") {
    return;
  }
  return (
    <thead className="bg-zinc-200 p-3">
      <tr className="text-left p-3">{children}</tr>
    </thead>
  );
}
