import { useState } from "react";
import "../App.css";

function AddNote({ onAddNote }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const addNoteHandler = (e) => {
        e.preventDefault();
        let data = {
            title: title,
            description: description,
            id: new Date(),
        };
        onAddNote(data);
        setTitle("");
        setDescription("");
    };
    return (
        <form className="note-form" onSubmit={addNoteHandler}>
            <h4>Add new note</h4>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="note title..."
                className="text-field"
            />
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="note description..."
                className="text-field"
            />
            <button className="btn btn--primary">Add new Note</button>
        </form>
    );
}

export default AddNote;
