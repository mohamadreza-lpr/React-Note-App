import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddNote from "./components/AddNote";
import NoteList from "./components/NoteList";

function App() {
    const [noteLists, setNoteLists] = useState([]);
    const addNoteHandler = (newNote) => {
        setNoteLists((prev) => [...prev, newNote]);
        console.log("AA", noteLists);
    };

    return (
        <>
            <div className="note-header">
                <h1>My Notes</h1>
                <select id="fruit" name="fruit">
                    <option value="Sort Based on latest">Sort Based on latest</option>
                    <option value="Sort Based on earliest">Sort Based on earliest</option>
                </select>
            </div>
            <div className="note-app">
                <AddNote onAddNote={addNoteHandler} />
                <NoteList noteLists={noteLists} />
            </div>
        </>
    );
}

export default App;
