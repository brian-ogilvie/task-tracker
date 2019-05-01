import React from 'react'
import './Column.css'

import Task from '../Task/Task'
import TogglableItemAdder from '../TogglableItemAdder/TogglableItemAdder'
import EditButton from '../EditButton/EditButton'

const Column = ({column, onAddItem}) => {
  if (column) {
    const {title, tasks, bgColor} = column
    const allTasks = tasks.map((task, i) => {
      return <Task task={task} key={`${title}--${i}`} />
    })
  
    const handleAddTask = (newTask) => {
      onAddItem(title, newTask)
    }
  
    return (
      <div className="Column">
        <div className="Column__title" style={{backgroundColor: bgColor}}>
          {title}
          <EditButton />
        </div>
        <div className="Column__taskList">
          {allTasks}
        </div>
        <TogglableItemAdder onAddItem={handleAddTask} itemType="card" />
      </div>
    )
  }

  const handleAddColumn = newColumn => {
    onAddItem(newColumn)
  }

  return (
    <div className="Column Column--transparent">
      <TogglableItemAdder onAddItem={handleAddColumn} itemType="list" />
    </div>
  )
}

Column.defaultProps = {
  title: 'New Column',
  tasks: []
}

export default Column