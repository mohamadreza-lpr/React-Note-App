import React from "react";

function NoteList({ noteLists }) {
    console.log("noteLists", noteLists);

    return (
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
                    <div key={n.id} className="note-item">
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
    );
}

export default NoteList;
