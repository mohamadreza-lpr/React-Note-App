import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddNote from "./components/AddNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";

function App() {
    const [noteLists, setNoteLists] = useState([]);
    const [sortBy, setSortBy] = useState();

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
    const filterHandler = (event) => {
        if (event == "latest") {
            setNoteLists((prev) => [...prev].sort((a, b) => new Date(b.created_at) - new Date(a.created_at)));
        } else if (event == "earliest") {
            setNoteLists((prev) => [...prev].sort((a, b) => new Date(a.created_at) - new Date(b.created_at)));
        }
    };
    return (
        <div className="container">
            <div className="note-header">
                <NoteHeader sortBy={sortBy} onFilterHandler={filterHandler} />
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
