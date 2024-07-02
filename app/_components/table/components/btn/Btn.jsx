function Btn(props) {
  const { children, click = () => {} } = props;

  return (
    <button
      onClick={click}
      className="cursor-pointer bg-neutral-white hover:text-secondary active:opacity-50 shadow-md text-black text-xl font-bold py-2 px-2 rounded"
    >
      {children}
    </button>
  );
}

export default Btn;
