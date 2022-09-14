import "./styles.css";
import { useState, useEffect } from "react";
import { Notes } from "./Notes";
import axios from "axios";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [loading, setLoading] = useState(false);
  console.log("App fue renderizada");

  useEffect(() => {
    console.log("useEffect");
    console.log("setLoading");
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      // .then((res) => res.json())
      .then((res) => {
        const { data } = res;
        setNotes(data);
        setLoading(false);
      });
  }, []);

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const noteToAddToState = {
      userId: notes.lenght + 1,
      id: notes.lenght + 1,
      title: "Nueva nota",
      body: newNote
    };
    setNotes([...notes, noteToAddToState]);
    setNewNote("");
  };

  return (
    <div>
      <h1>Notes</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote} />
        <button>Crear Nota</button>
      </form>

      <p>{loading ? "Cargando... " : ""}</p>

      <ol>
        {notes.map((note) => (
          <Notes key={note.id} title={note.title} body={note.body} />
        ))}
        <br />
      </ol>
    </div>
  );
}
