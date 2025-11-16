import React from "react";

function NoteList({ noteLists, onRemoveNote, onComplete }) {
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    return (
        <>
            {noteLists.length > 0 ? (
                noteLists.map((n) => {
                    return (
                        <div key={n.id} className="note-item">
                            <div className="note-item__header">
                                <div className={n.completed ? "note-item completed" : ""}>
                                    <h3 className={n.completed ? "title" : ""}> {n.title}</h3>
                                    <p className="desc">{n.description}</p>
                                </div>
                                <div className="actions">
                                    <button
                                        className="trash"
                                        onClick={() => {
                                            onRemoveNote(n);
                                        }}
                                    >
                                        ❌
                                    </button>
                                    <input
                                        type="checkbox"
                                        name="subscribe"
                                        value={n.completed}
                                        onChange={() => {
                                            onComplete(n);
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="note-item__footer">{new Date(n.created_at).toLocaleDateString("en-US", options)}</div>
                        </div>
                    );
                })
            ) : (
                <div>No note available</div>
            )}
        </>
    );
}

export default NoteList;
