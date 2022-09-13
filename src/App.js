import "./styles.css";
import { useState } from "react";
import { Notes } from "./Notes";

export default function App(props) {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const noteToAddToState = {
      userId: notes.lenght + 1,
      important: Math.random() < 0.5,
      id: notes.lenght + 1,
      title: "Nueva nota",
      body: newNote
    };
    setNotes([...notes, noteToAddToState]);
    setNewNote("");
  };

  const handleShowAll = () => {
    setShowAll(!showAll);
  };
  return (
    <div>
      <h1>Notes</h1>
      <button onClick={handleShowAll}>
        {showAll ? "Show only important" : "Show all"}
      </button>
      <ul>
        {notes
          .filter((note) => {
            if (showAll === true) return true;
            return note.important === true;
          })
          .map((note) => (
            <Notes key={note.id} title={note.title} body={note.body} />
          ))}
        <br />
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} value={newNote} />
          <button>Crear Nota</button>
        </form>
      </ul>
    </div>
  );
}
