import React from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const state = {
        "name": "Ajit",
        "class": "5b"
    }
    return(
        <NoteContext.Provider value={state}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;