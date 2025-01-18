interface Todo {
  text: string;
  isCompleted: boolean;
  isDeleted?: boolean;
}

export default function Todo({ text, isCompleted, isDeleted }: Todo) {
  if (isDeleted) {
    return null;
  } else {
    return (
      <li>
        {text}
        {isCompleted && " ✅"}
      </li>
    );
  }
}
