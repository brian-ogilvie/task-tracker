import { UPDATE_USER } from '../actions/userActions'

export function userReducer(state = '', {type, payload}) {
  switch (type) {
    case UPDATE_USER:
      return payload.user
    default:
      return state
  }
}