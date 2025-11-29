import React from "react";

function NoteHeader({ onFilterHandler }) {
    return (
        <>
            <h1>My Notes</h1>
            <select id="fruit" name="fruit" onChange={(e)=> onFilterHandler(e.target.value)}>
                <option value="latest">Sort Based on latest</option>
                <option value="earliest">Sort Based on earliest</option>
            </select>
        </>
    );
}

export default NoteHeader;
