import React from "react";
import ReactDOM from "react-dom";

function Note() {

  const year = new Date().getFullYear();

  return <div class="note">
    <h1 class="h1">This is the title</h1>
    <p>This is the content</p>
  </div>
}

export default Note;
