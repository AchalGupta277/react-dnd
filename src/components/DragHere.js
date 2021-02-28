import React, { useState } from 'react'

function DragHere() {

  const [text, setText] = useState('Drag module here');

  const drop = e => {
    e.preventDefault();
    setText('Dropped');
  }
  const dragOver = e => {
    e.preventDefault();
  };
  return (
    <div className="drag-here-module"
      onDrop={drop}
      onDragOver={dragOver}
    >
      {text}
    </div>
  )
}

export default DragHere
