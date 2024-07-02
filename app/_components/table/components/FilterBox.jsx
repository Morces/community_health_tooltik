function FilterBox(props) {
  const { children = null, title = "" } = props;

  return (
    <div>
      <h1 className=" font-bold text-lg opacity-50">{title}</h1>
      <div
        className=" bg-black opacity-30 w-full mb-2"
        style={{ height: "2px" }}
      />
      <div className=" flex flex-col gap-y-2">{children}</div>
    </div>
  );
}

export default FilterBox;
