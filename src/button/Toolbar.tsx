interface props {
  onClick: VoidFunction;
}

export default function Toolbar({ onClick }: props) {
  return (
    <div onClick={onClick}>
      <button type="button" onClick={onClick}>
        First
      </button>
      <button type="button" onClick={onClick}>
        Second
      </button>
    </div>
  );
}
