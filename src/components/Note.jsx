import { useState } from "react";
import "../styles/Note.css";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";

const Note = ({ notes, setNotes }) => {
   const [noteEditItem, setNoteEditItem] = useState(null);

   const onDelete = (id) => {
      setNotes((notes) => notes.filter((note) => note.id !== id));
   };

   const onEdit = (note) => {
      setNoteEditItem({ ...note });
   };

   const onDoneEdit = () => {
      setNotes((notes) => {
         return notes.map((note) => {
            if (note.id === noteEditItem?.id) {
               return noteEditItem;
            }
            return note;
         });
      });
      setNoteEditItem(null);
   };

   const noteEditItemNameChangeHandler = (e) => {
      const newName = e.target.value;
      setNoteEditItem({ ...noteEditItem, name: newName });
   };

   return (
      <div className="notes">
         {notes.map((note) => (
            <div className="note" key={note.id}>
               <div className="icons">
                  <CloseIcon
                     onClick={() => onDelete(note.id)}
                     className="icon"
                  />

                  {!(noteEditItem?.id === note.id) && (
                     <EditIcon onClick={() => onEdit(note)} className="icon" />
                  )}
                  {noteEditItem?.id === note.id && (
                     <DoneIcon onClick={() => onDoneEdit()} className="icon" />
                  )}
               </div>
               <hr />
               <h2>Note</h2>
               {!(noteEditItem?.id === note.id) && <p>{note.name}</p>}
               {noteEditItem?.id === note.id && (
                  <textarea
                     className="text"
                     value={noteEditItem.name}
                     onChange={noteEditItemNameChangeHandler}
                  ></textarea>
               )}
            </div>
         ))}
      </div>
   );
};

export default Note;
