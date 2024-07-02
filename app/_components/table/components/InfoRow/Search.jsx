import { FaSearch } from "react-icons/fa";

import { useContext, useEffect } from "react";

import TableContext from "../Provider/TableContext";

export default function Search(props) {
  const {
    search = "",
    setSearch = () => {},
    setSearchUrl,
  } = useContext(TableContext);

  const { url } = props;

  useEffect(() => {
    setSearchUrl(url);
  }, [url]);

  if (!url) {
    return null;
  }

  const handleChange = (e) => {
    let v = e.target.value;
    setSearch(v);
  };

  return (
    <div className="  w-full md:w-80  border-2 rounded-md h-10 flex items-center px-2">
      <input
        className=" w-full  px-4 h-full focus:outline-none focus:ring-0  "
        value={typeof search === "string" ? search : ""}
        onChange={handleChange}
      />
      <span className=" text-lg">
        <FaSearch />
      </span>
    </div>
  );
}
