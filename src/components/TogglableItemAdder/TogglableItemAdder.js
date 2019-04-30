import React from 'react'
import './TogglableItemAdder.css'

import AddTaskButton from '../AddTaskButton/AddTaskButton'
import AddItemForm from '../AddItemForm/AddItemForm'

class TogglableItemAdder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      adding: false
    }
  }

  showForm = () => {
    this.setState({adding: true})
  }

  hideForm = () => {
    this.setState({adding: false})
  }

  handleAddItem = (newItem) => {
    this.props.onAddItem(newItem)
    this.hideForm()
  }

  render() {
    return (
      <div className="TogglableItemAdder">
        {this.state.adding ? 
          <AddItemForm onAddItem={this.handleAddItem} onClose={this.hideForm} /> :
          <AddTaskButton onClick={this.showForm} />
        }
      </div>
    )
  }
}

export default TogglableItemAdder