import useDevice from "../../../hooks/useDevice";

import Search from "./Search";
import Loading from "./Loading";
import {
  AddBtn,
  FilterBtn,
  RemoveFilter,
  ReportBtn,
  ReloadBtn,
  ErrorBtn,
  AnotherBtn,
} from "./../btn";

export default function InfoRow(props) {
  return (
    <>
      <Mobile {...props} />
      <Other {...props} />
    </>
  );
}

function Mobile(props) {
  const { label = "Table Name", isLoading = true } = props;
  const device = useDevice();

  if (device !== "sm") {
    return null;
  }

  return (
    <div className="w-full flex-col gap-y-4 mb-2">
      <div className="flex w-full justify-between items-center gap-x-4">
        <span className="text-xl font-bold text-primary">{label}</span>
        <span className={`${isLoading ? "visible" : "invisible"}`}>
          <Loading />
        </span>
      </div>

      <Search {...props} />
      <div className="flex justify-around flex-wrap gap-x-2 mt-2">
        <FilterBtn {...props} />
        <RemoveFilter {...props} />
        <ReportBtn {...props} />
        <ReloadBtn {...props} />
        <ErrorBtn {...props} />
        <AddBtn {...props} />
        <AnotherBtn {...props} />
      </div>
    </div>
  );
}

function Other(props) {
  const { label = "Table Name", isLoading } = props;
  const device = useDevice();

  if (device === "sm") {
    return null;
  }

  return (
    <div className="w-full flex-wrap flex gap-x-2 justify-between items-center">
      <div className="flex items-center gap-x-4">
        <span className="text-xl font-bold text-primary">{label}</span>
        <span className={`${isLoading ? "visible" : "invisible"}`}>
          <Loading />
        </span>
      </div>
      <div className="flex flex-wrap items-center justify-evenly gap-x-4">
        <Search {...props} />
        <FilterBtn {...props} />
        <RemoveFilter {...props} />
        <ReportBtn {...props} />
        <ReloadBtn {...props} />
        {/* <ErrorBtn {...props} /> */}
        <AddBtn {...props} />
        <AnotherBtn {...props} />
      </div>
    </div>
  );
}
