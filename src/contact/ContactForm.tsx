import { useImmer } from "use-immer";

interface Contact {
  name: string;
  message: string;
}

const initialData: Contact = {
  name: "",
  message: "",
};

export default function ContactForm() {
  const [contact, setContact] = useImmer(initialData);

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setContact((contact) => {
      contact.name = e.target.value;
    });
  }
  function handleMessageChange(e: React.ChangeEvent<HTMLInputElement>) {
    setContact((contact) => {
      contact.message = e.target.value;
    });
  }

  return (
    <>
      <h1>Contact Form</h1>
      <form action="">
        <input
          type="text"
          placeholder="Input Contact"
          value={contact.name}
          onChange={handleNameChange}
        />
        <br />
        <input
          type="text"
          placeholder="Input Message"
          value={contact.message}
          onChange={handleMessageChange}
        />
      </form>
      <h1>Contact Detail</h1>
      <p>Name : {contact.name}</p>
      <p>Message : {contact.message}</p>
    </>
  );
}
