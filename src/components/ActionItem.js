import React from 'react'

function ActionItem(props) {
  const dragStart = e => {
    const target = e.target;
    console.log('Drap started');
  };
  const dragOver = e => {
    e.preventDefault();
  };
  return (
    <div className="action-item"
      draggable="true"
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      {props.text}
    </div>
  )
}

export default ActionItem
