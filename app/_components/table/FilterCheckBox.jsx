function FilterCheckBox(props) {
  const {
    j = null,
    setInput = () => {},
    input = [],
    label = "Checkbox",
    s = 1.3,
  } = props;

  const handleChange = () => {
    try {
      if (!Array.isArray(input)) {
        return;
      }
      let inputCpy = [...input];
      let index = input.indexOf(j?.toString());

      if (index >= 0) {
        inputCpy.splice(index, 1);
        setInput(inputCpy);
        return;
      }

      inputCpy.push(j);
      setInput(inputCpy);
      return;
    } catch (e) {
      console.error("Error updating checkbox: " + e.message);
    }
  };

  return (
    <div className="flex gap-x-2 items-center w-full">
      <input
        style={{
          height: `${s}em`,
          width: `${s}em`,
        }}
        type="checkbox"
        checked={input.includes(j?.toString()) ? true : false}
        onChange={handleChange}
      />
      <span className=" text-lg font-semibold text-gray-600">{label}</span>
    </div>
  );
}

export default FilterCheckBox;
