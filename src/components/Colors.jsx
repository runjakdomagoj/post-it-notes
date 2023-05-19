import React from "react";
import "../styles/Colors.css";

const Colors = ({ setColorClass }) => {
   return (
      <div className="colors">
         <div
            onClick={() => setColorClass("yellow-note")}
            className="yellow"
         ></div>
         <div onClick={() => setColorClass("blue-note")} className="blue"></div>
         <div onClick={() => setColorClass("pink-note")} className="pink"></div>
      </div>
   );
};

export default Colors;
