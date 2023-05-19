import { useState } from "react";
import "./App.css";
import Note from "./components/Note";
import Form from "./components/Form";

const App = () => {
   const [notes, setNotes] = useState([]);

   return (
      <div className="app">
         <Form notes={notes} setNotes={setNotes} />
         <div className="notes">
            {notes.map((note) => {
               return <Note note={note} notes={notes} setNotes={setNotes} />;
            })}
         </div>
      </div>
   );
};

export default App;
