import React from 'react'
import './Task.css'

// import ChangeColumnButton from '../ChangeColumnButton/ChangeColumnButton'

const Task = ({task}) => {
  return (
    <div className="Task">
      {task}
    </div>
  )
}

export default Task