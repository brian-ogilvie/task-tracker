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
    const {itemType} = this.props
    return (
      <div className="TogglableItemAdder">
        {this.state.adding ? 
          <AddItemForm onAddItem={this.handleAddItem} onClose={this.hideForm} itemType={itemType} /> :
          <AddTaskButton onClick={this.showForm} itemType={itemType} />
        }
      </div>
    )
  }
}

TogglableItemAdder.defaultProps = {
  itemType: 'card'
}

export default TogglableItemAdder