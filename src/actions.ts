import StoredState from './components/commonTypes/state'

export const CHANGE_PIN_ADD = 'CHANGE_PIN_ADD'
export const CHANGE_PIN_CLEAR = 'CHANGE_PIN_CLEAR'
export const CHANGE_PIN_TOGGLE_LOCK = 'CHANGE_PIN_TOGGLE_LOCK'

interface addNumber {
  type: typeof CHANGE_PIN_ADD
  payload: string
}

interface clearPin {
    type: typeof CHANGE_PIN_CLEAR
  }

  interface changeLockStatus {
    type: typeof CHANGE_PIN_TOGGLE_LOCK
  }

export type BoxActionTypes = addNumber | clearPin | changeLockStatus
