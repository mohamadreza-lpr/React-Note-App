import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddNote from "./components/AddNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";

function App() {
    const [noteLists, setNoteLists] = useState([]);
    const addNoteHandler = (newNote) => {
        setNoteLists((prev) => [...prev, newNote]);
    };
    const removeNote = (note) => {
        setNoteLists((prev) => {
            return prev.filter((item) => item.id !== note.id);
        });
    };
    const noteCompleteHandler = (note) => {
        let updatedNotes = noteLists.map((item) => {
            if (item.id == note.id) {
                item.completed = !item.completed;
            }
            return item;
        });
        setNoteLists(updatedNotes);
    };
    return (
        <div className="container">
            <div className="note-header">
                <h1>My Notes</h1>
                <select id="fruit" name="fruit">
                    <option value="Sort Based on latest">Sort Based on latest</option>
                    <option value="Sort Based on earliest">Sort Based on earliest</option>
                </select>
            </div>
            <div className="note-app">
                <AddNote onAddNote={addNoteHandler} />
                <div className="note-container">
                    <NoteStatus notes={noteLists} />
                    <NoteList noteLists={noteLists} onRemoveNote={removeNote} onComplete={noteCompleteHandler} />
                </div>
            </div>
        </div>
    );
}

export default App;
