interface props {
  text: string;
  onSmash: VoidFunction;
}

export default function SmashButton({ text, onSmash }: props) {
  return (
    <>
      <button onClick={onSmash}>{text}</button>
    </>
  );
}
