import React from "react";
import "./PlayNumber.css";

// Color Theme
const colors = {
  available: "lightgray",
  used: "lightgreen",
  wrong: "lightcoral",
  candidate: "deepskyblue",
};
function PlayNumber({ number, status, onClick }) {
  return (
    <>
      <button
        className="number"
        style={{ backgroundColor: colors[status] }}
        onClick={() => onClick(number, status)}
      >
        {number}
      </button>
    </>
  );
}

export default PlayNumber;
