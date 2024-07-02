import React from "react";
import useDevice from "../../../_components/hooks/useDevice";

function TR(props) {
  const device = useDevice();
  return device === "sm" ? <TRMobile {...props} /> : <TROther {...props} />;
}

function TRMobile(props) {
  const { children } = props;

  return (
    <>
      {React.Children.map(children, (child, index) => (
        <tr key={index}>
          <td className="border border-slate-600">
            &nbsp;{child?.props?.name || ""}&nbsp;
          </td>
          <td className="border border-slate-600 px-2 py-1">
            {child?.props?.txt || child?.props?.children || child}
          </td>
        </tr>
      ))}
      <tr className="">
        <td className="py-2"></td>
      </tr>
    </>
  );
}

function TROther(props) {
  const { children } = props;

  return <tr className="odd:bg-neutral-white even:bg-white">{children}</tr>;
}

export default TR;
