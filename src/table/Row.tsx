interface props {
  id: number;
  text: string;
}

export default function Row({ text, id }: props) {
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{text}</td>
      </tr>
    </>
  );
}
