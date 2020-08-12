import { Action, createStore as reduxCreateStore } from 'redux'
import actionCreatorFactory, { isType } from 'typescript-fsa'

const actionCreator = actionCreatorFactory()

export const toggleModal = actionCreator<boolean>('TOGGLE_MODAL')

export interface State {
  modal: ModalState
}

export interface ModalState {
  isOpen: boolean
}

const reducer = (state: State, action: Action) => {
  if (isType(action, toggleModal)) {
    return {
      ...state,
      modal: {
        isOpen: action.payload,
      }
    }
  }

  return state
}

const initialState: State = {
  modal: {
    isOpen: false,
  }
}

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
