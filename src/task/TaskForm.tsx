import { useState } from "react";

interface TaskFormProps {
  onSubmit: (value: string) => void;
}

export default function TaskForm({ onSubmit }: TaskFormProps) {
  const [item, setItem] = useState<string>("");

  function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    setItem(e.target.value);
  }

  function handleClickInput(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    onSubmit(item);
    setItem("");
  }

  return (
    <>
      <h1>Create Task</h1>
      <input type="text" value={item} onChange={handleChangeInput} />
      <button onClick={handleClickInput}>Add Item</button>
    </>
  );
}
