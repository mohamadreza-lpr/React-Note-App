import React from "react";

function NoteStatus({ notes }) {
    const allNotes = notes.length;
    const completedNotes = notes.filter((n) => n.completed).length;
    const openNotes = allNotes - completedNotes;

    if(!allNotes) return <p>No Notes has already been added.</p>
    
    return (
        <ul className="note-status">
            <li>
                All <span>{allNotes}</span>
            </li>
            <li>
                Completed <span>{completedNotes}</span>
            </li>
            <li>
                Open <span>{openNotes}</span>
            </li>
        </ul>
    );
}

export default NoteStatus;
