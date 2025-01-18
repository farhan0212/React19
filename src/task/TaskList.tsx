interface TaskProps {
  items: string[];
  onDelete: (index: number) => void;
}

export default function TaskList({ items = [], onDelete }: TaskProps) {
  return (
    <>
      <h2>List of Task</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => onDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
