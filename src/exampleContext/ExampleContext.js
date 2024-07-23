import { useContext } from "react";
import noteContext from "../context/notes/noteContext";

export default function ExampleContext() {
  const a = useContext(noteContext);
  return (
    <section>
      <h1>Fetch value using context: {a.name}</h1>
    </section>
  );
}
