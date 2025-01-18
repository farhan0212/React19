import { useImmer } from "use-immer";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

export default function Task() {
  const [items, setItems] = useImmer<string[]>([]);

  function handleOnSubmit(item: string) {
    setItems((draft) => {
      draft.push(item);
    });
  }

  function handleDelete(index: number) {
    setItems((draft) => {
      draft.splice(index, 1);
    });
  }

  return (
    <>
      <TaskForm onSubmit={handleOnSubmit} />
      <TaskList items={items} onDelete={handleDelete} />
    </>
  );
}
