import { createStore as reduxCreateStore } from 'redux'

const reducer = (state, action) => {
  if (action.type === `TOGGLE_MODAL`) {
    return {
      ...state,
      modal: {
        isOpen: action.value
      }
    }
  }

  return state
}

const initialState = {
  modal: {
    isOpen: false,
  }
}

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
