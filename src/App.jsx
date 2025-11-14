import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [noteLists, setNoteLists] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const test = () => {
        let data = {
            title: title,
            description: description,
        };
        setNoteLists([...noteLists, data]); 
        setTitle("");
        setDescription("");
        console.log(noteLists);
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
                <div className="note-form">
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
                    <button className="btn btn--primary" onClick={test}>
                        Add new Note
                    </button>
                </div>
                <div className="note-container">
                    <div className="note-status">
                        <p>All</p>
                        <span> 0</span>
                        <p>Completed</p>
                        <span>0</span>
                        <p>Open</p>
                        <span>0</span>
                    </div>
                    {noteLists.map((n) => {
                        return (
                            <div className="note-item">
                                <div className="note-item__header">
                                    <div>
                                        <h3> {n.title}</h3>
                                        <p className="desc">{n.description}</p>
                                    </div>
                                    <div className="actions">
                                        <div className="trash">trash</div>
                                        <input type="checkbox" name="subscribe" value="yes" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default App;
