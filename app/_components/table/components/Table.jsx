import { useState } from "react";
import InfoRow from "./InfoRow";
import Pagination from "./Pagination";

import TableProvider from "./Provider";

export default function Table(props) {
  const {
    children,
    setIsLoading = () => {},
    setDocs = () => {},
    setIsFiltered = () => {},
  } = props;

  return (
    <TableProvider
      setIsFiltered={setIsFiltered}
      setIsLoading={setIsLoading}
      setDocs={setDocs}
    >
      <div className="w-full rounded-lg p-4 bg-white ">
        <InfoRow {...props} />
        <div className=" overflow-x-auto rounded-t-md min-w-full">
          <table className=" min-w-full divide-y table-auto  overscroll-y-none ">
            {children}
          </table>
        </div>
        <Pagination {...props} />
      </div>
    </TableProvider>
  );
}
