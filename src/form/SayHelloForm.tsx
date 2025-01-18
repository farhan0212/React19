export default function SayHelloForm() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const nameInput = document.getElementById("name") as HTMLInputElement;
    if (nameInput) {
      const name = nameInput.value;
      const textHello = document.getElementById("text_hello");
      if (textHello) {
        textHello.innerText = `Hello ${name}`;
      }
    }
  };

  return (
    <>
      <form>
        <input type="text" id="name" />
        <button onClick={handleClick}>Say Hello</button>
      </form>
      <h1 id="text_hello"> Hello</h1>
    </>
  );
}
