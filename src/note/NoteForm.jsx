import {useContext ,useState } from "react";
import { NotesDispatchContext } from "./NoteContext";

export default function  NoteForm() {
    const [text, setText] = useState("");
    const dispatch = useContext(NotesDispatchContext);

    function handleChange(e){
        setText(e.target.value);
    }

    function handleClick(e){
       dispatch({
            type: "ADD_NOTE",
            text: text
       })
    }

    return (
        <>

        <input placeholder="Add note" value={text} onChange={handleChange}/>
        <button onClick={handleClick}>Add</button>

        </>
    )
}