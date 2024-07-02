// Table head Text

export default function THT(props) {
  const { txt = "Head" } = props;
  return (
    <th className="uppercase text-md px-4 font-bold py-2 text-primary ">
      {txt}
    </th>
  );
}
