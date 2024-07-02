import TD from "./TD";

function TDT(props) {
  const { txt } = props;

  return (
    <TD>
      <span className=" text-lg font-medium">{txt}</span>
    </TD>
  );
}

export default TDT;
