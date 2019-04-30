import React from 'react'
import './AddTaskButton.css'

const AddTaskButton = ({onClick, itemType}) => {
  const item = itemType || "card"
  const classForItemType = itemType === 'list' ? ' AddTaskButton--list' : ''
  return (
    <div className={"AddTaskButton" + classForItemType} onClick={onClick}>
      <div className="AddTaskButton__plus">+</div>
      <div className="AddTaskButton__text">Add another {item}</div>
    </div>
  )
}

export default AddTaskButton