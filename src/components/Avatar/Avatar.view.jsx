import React from "react";
import "./Avatar.css";

export default function Avatar({ name }) {
  return (
    <div className="container flex al-center jc-center">
      {name?.charAt(0).toUpperCase()}
    </div>
  );
}
