import React from 'react'
import './AddTaskButton.css'

const AddTaskButton = ({onClick}) => {
  return (
    <div className="AddTaskButton" onClick={onClick}>
      <div className="AddTaskButton__plus">+</div>
      <div className="AddTaskButton__text">Add a card</div>
    </div>
  )
}

export default AddTaskButton