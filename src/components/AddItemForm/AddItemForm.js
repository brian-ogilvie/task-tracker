import React from 'react'
import './AddItemForm.css'

class AddItemForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newItem: ''
    }
  }

  handleChange = e => {
    const {value} = e.target
    this.setState({
      newItem: value
    })
  }

  addItem = () => {
    const {newItem} = this.state
    this.props.onAddItem(newItem)
  }

  onFormSubmit = e => {
    e.preventDefault()
    this.addItem()
  }

  render() {
    const {onClose, itemType} = this.props
    return (
      <form className="AddItemForm" onSubmit={this.onFormSubmit}>
        <div className="AddItemForm__input-holder">
          <textarea 
            className="AddItemForm__input" 
            placeholder={`Enter a title for this ${itemType}...`}
            value={this.state.newItem} 
            onChange={this.handleChange}
            autoFocus={true}
          />
        </div>
        <div className="AddItemForm__buttons">
          <button type="submit" className="AddItemForm__submit">Add {itemType}</button>
          <button type="reset" className="AddItemForm__close" onClick={onClose}><i className="fas fa-times"></i></button>
        </div>
      </form>
    )
  }
}

export default AddItemForm