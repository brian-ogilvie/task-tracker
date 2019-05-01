import React from 'react'
import './Task.css'

import EditButton from '../EditButton/EditButton'

const Task = ({task}) => {
  return (
    <div className="Task">
      {task}
      <EditButton />
    </div>
  )
}

export default Task