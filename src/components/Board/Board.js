import React from 'react'
import './Board.css'

import Column from '../Column/Column'

class Board extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      columns: [
        {
          title: 'Winnie',
          tasks: [
            'Task 1',
            'Task 2',
          ],
          bgColor: '#8E6395'
        },
        {
          title: 'Bob',
          tasks: [
            'Task 1',
            'Task 2',
          ],
          bgColor: '#39A59C'
        },{
          title: 'Thomas',
          tasks: [
            'Task 1',
            'Task 2',
          ],
          bgColor: '#344759'
        },{
          title: 'George',
          tasks: [
            'Task 1',
            'Task 2',
          ],
          bgColor: '#E8741E'
        },
      ]
    }
  }

  handleAddTaskClick = (title, newTask) => {
    if (!newTask) {return;}
    this.setState(prevState => {
      const requestedColumnIndex = prevState.columns.findIndex(column => {
        return column.title === title
      })
      const newColumn = Object.assign({}, prevState.columns[requestedColumnIndex])
      newColumn.tasks.push(newTask)
      const newColumns = [
        ...prevState.columns.slice(0, requestedColumnIndex),
        newColumn,
        ...prevState.columns.slice(requestedColumnIndex + 1)
      ]
      return {
        ...prevState,
        columns: newColumns
      }
    })
  }

  getRandHex = () => {
    const hexChars = '0123456789ABCDEF'
    let hex = '#'
    for (let i = 0; i < 6; i++) {
      const randIdx = Math.floor(Math.random() * hexChars.length)
      hex += hexChars[randIdx]
    }
    return hex
  }

  handleAddColumn = newTitle => {
    const bgColor = this.getRandHex()
    const newColumn = {
      title: newTitle,
      tasks: [],
      bgColor: bgColor
    }
    this.setState(prevState => {
      const columns = [
        ...prevState.columns,
        newColumn
      ]
      return {columns}
    })
  }

  render() {
    const allColumns = this.state.columns.map((column, i) => {
      return <Column column={column} onAddItem={this.handleAddTaskClick} key={i} />
    })
    return (
      <div className="Board">
        {allColumns}
        <Column onAddItem={this.handleAddColumn} />
      </div>
    )
  }
}

export default Board