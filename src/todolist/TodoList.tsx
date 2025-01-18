import AlertButton from "../button/AlertButton";
import SmashButton from "../button/SmashButton";
import Toolbar from "../button/Toolbar";
import Counter from "../form/Counter";
import SayHelloForm from "../form/SayHelloForm";
import SearchForm from "../form/SearchForm";
import Table from "../table/Table";
import Todo from "./Todo";

export default function TodoList() {
  const data = [
    {
      id: 0,
      text: "HTML",
      isCompleted: true,
      isDeleted: true,
    },
    {
      id: 1,
      text: "CSS",
      isCompleted: true,
    },
    {
      id: 2,
      text: "JS",
      isCompleted: true,
    },
    {
      id: 3,
      text: "REACT",
      isCompleted: true,
    },
    {
      id: 4,
      text: "Golang",
      isCompleted: false,
    },
  ];

  return (
    <>
      <ul>
        {data.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
      <Table />
      <AlertButton text="pencet acu" message="Hello motherfucker" />
      <SmashButton onSmash={() => alert("smash ")} text="hallo" />
      <Toolbar
        onClick={() => {
          alert("Toolbar clicked");
        }}
      />
      <SearchForm />
      <SayHelloForm />
      <Counter />
    </>
  );
}
