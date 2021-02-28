import React from 'react'
import ActionItem from './ActionItem'

function ActionList() {
  return (
    <div className="action-list">
      <ActionItem text="Text"/>
      <ActionItem text="Image" />
      <ActionItem text="Head" />
    </div>
  )
}

export default ActionList
