import StoredState from './components/commonTypes/state'
import {MAX_PIN_DIGITS} from './components/commonTypes/constants'
import {
    CHANGE_PIN_ADD,
    CHANGE_PIN_CLEAR,
    CHANGE_PIN_TOGGLE_LOCK,
    BoxActionTypes
  } from './actions'

  const initialState: StoredState = {
    enteredPin: '',
    savedPin: '',
    isLocked: false,
    errorMsg: '',
  }

  export const changePin = (state=initialState, action : BoxActionTypes) : StoredState => {
    switch (action.type) {
      case CHANGE_PIN_ADD:
        let curEnteredPin = state.enteredPin;
        if( curEnteredPin.length === MAX_PIN_DIGITS )
        {
            return {...state, errorMsg: "PIN maximum length reached"};
            // return Object.assign({}, state, {errorMsg: "PIN maximum length reached" } );
        }
        else
        {
            return {...state, enteredPin: state.enteredPin.concat(action.payload) ,errorMsg: "" };
            // return Object.assign({}, state, {enteredPin: state.enteredPin.concat(action.payload) ,errorMsg: "" } )          
        }
      case CHANGE_PIN_CLEAR:
        return {...state, enteredPin: '' , errorMsg: ""}
        // return Object.assign({}, state, {enteredPin: '' , errorMsg: ""} )
      case CHANGE_PIN_TOGGLE_LOCK:        
          if( state.isLocked === false )
          {
              console.log("CHANGE_PIN_TOGGLE_LOCK isLocked === false");
              if( state.enteredPin.length < MAX_PIN_DIGITS )
              {
                  console.log("CHANGE_PIN_TOGGLE_LOCK isLocked === false <MAX_PIN_DIGITS");
                  return {...state, errorMsg: "PIN too short."};
                  // return Object.assign({}, state, {errorMsg: "PIN too short." } );                
              }
              else if( state.enteredPin.length === MAX_PIN_DIGITS )
              {
                return {...state, isLocked: true , savedPin: state.enteredPin, enteredPin: '', errorMsg: ""};
                // return Object.assign({}, state, {isLocked: true , savedPin: state.enteredPin, enteredPin: '', errorMsg: "" } )
              }
            //   break;
          }
          else  // isLocked
          {
              if( state.enteredPin === state.savedPin )
              {
                return {...state, isLocked: false , savedPin: '', enteredPin: '', errorMsg: ""};
                // return Object.assign({}, state, {isLocked: false , savedPin: '', enteredPin: '', errorMsg: "" } )  
              }
              else
              {
                console.log("CHANGE_PIN_TOGGLE_LOCK isLocked === true pin not match");
                return {...state, errorMsg: "PIN not matched."};
                // return Object.assign({}, state, {errorMsg: "PIN not matched." } );
              }
                      
          }
      default:
        console.log("changePin-default-reducer")
        return state ;
    }
  }
  