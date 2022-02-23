import React from "react";
import "./Button.css";
export default function Button({ title, onClick }) {
  return (
    <button className="btn" onClick={onClick}>
      {title}
    </button>
  );
}
