import React from 'react'
import './AddItemForm.css'

class AddItemForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newCard: ''
    }
  }

  handleChange = e => {
    const {value} = e.target
    this.setState({
      newCard: value
    })
  }

  addItem = () => {
    const {newCard} = this.state
    this.props.onAddItem(newCard)
  }

  onFormSubmit = e => {
    e.preventDefault()
    this.addItem()
  }

  render() {
    const {onClose} = this.props
    return (
      <form className="AddItemForm" onSubmit={this.onFormSubmit}>
        <div className="AddItemForm__input-holder">
          <textarea 
            className="AddItemForm__input" 
            placeholder="Enter a title for this card..." 
            value={this.state.newCard} 
            onChange={this.handleChange}
            autoFocus={true}
          />
        </div>
        <div className="AddItemForm__buttons">
          <button type="submit" className="AddItemForm__submit">Add Card</button>
          <button type="reset" className="AddItemForm__close" onClick={onClose}><i className="fas fa-times"></i></button>
        </div>
      </form>
    )
  }
}

export default AddItemForm