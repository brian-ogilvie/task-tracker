import React from 'react'
import './Column.css'

import Task from '../Task/Task'
import TogglableItemAdder from '../TogglableItemAdder/TogglableItemAdder'

const Column = ({column, onAddItem}) => {
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
      </div>
      <div className="Column__taskList">
        {allTasks}
      </div>
      <TogglableItemAdder onAddItem={handleAddTask} />
    </div>
  )
}

Column.defaultProps = {
  title: 'New Column',
  tasks: []
}

export default Column