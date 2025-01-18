interface TypeForm {
  name: string;
  setName: (name: string) => void;
}

export default function ProfileInput({ name, setName }: TypeForm) {
  function ChangeEventName(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  return (
    <>
      <h2>Profile Form</h2>
      <input type="text" value={name} onChange={ChangeEventName} />
    </>
  );
}
