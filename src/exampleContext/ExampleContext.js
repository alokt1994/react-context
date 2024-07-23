import { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";

export default function ExampleContext() {
  const a = useContext(noteContext);
  useEffect(() => {
    a.update();
  });
  return (
    <section>
      <h1>Fetch value using context: {a.state.name} 😂😂😂</h1>
    </section>
  );
}
