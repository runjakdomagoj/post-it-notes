import { useState } from "react";
import "../styles/Form.css";

const Form = ({ notes, setNotes }) => {
   const [id, setId] = useState(0);

   const [noteValue, setNoteValue] = useState("");

   const addNote = (e) => {
      e.preventDefault();
      setNotes([...notes, { id: id, name: noteValue }]);
      setId(id + 1);
      setNoteValue("");
   };

   const noteValueChangeHandler = (e) => {
      setNoteValue(e.target.value);
   };

   return (
      <form onSubmit={addNote} className="form">
         <h2>Enter your note</h2>
         <textarea
            cols="30"
            rows="10"
            placeholder="Write your note here..."
            value={noteValue}
            onChange={noteValueChangeHandler}
         ></textarea>
         <button disabled={noteValue == ""}>Add</button>
      </form>
   );
};

export default Form;
