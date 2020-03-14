import { FETCH_SMURFS, FETCH_SUCCESS, FETCH_FAIL, POST_SMURF, POST_SUCCESS, POST_FAIL, PUT_SMURF, PUT_SUCCESS, PUT_FAIL, DELETE_SMURF, DELETE_SUCCESS, DELETE_FAIL, TOGGLE_EDIT } from '../actions'

const intitialState = {
   smurfs: [],
   isFetching: false,
   isEditing: false,
   smurfToEdit: {},
   error: ''
}

export const reducer = (state = intitialState, action) => {
   switch (action.type) {
      case FETCH_SMURFS:
         return {
            ...state,
            isFetching: true
         }
      case FETCH_SUCCESS:
         return {
            ...state,
            smurfs: action.payload,
            isFetching: false,
            error: ''
         }
      case FETCH_FAIL:
         return {
            ...state,
            isFetching: false,
            error: action.payload
         }
      case POST_SMURF:
         return {
            ...state,
            isFetching: true
         }
      case POST_SUCCESS:
         return {
            ...state,
            smurfs: action.payload,
            isFetching: false,
            error: ''
         }
      case POST_FAIL:
         return {
            ...state,
            error: action.payload
         }
      case PUT_SMURF:
         return {
            ...state,
            isFetching: true
         }
      case PUT_SUCCESS:
         return {
            ...state,
            smurfs: action.payload,
            isFetching: false,
            error: ''
         }
      case PUT_FAIL:
         return {
            ...state,
            error: action.payload
         }
      case DELETE_SMURF:
         return {
            ...state,
            isFetching: true
         }
      case DELETE_SUCCESS:
         return {
            ...state,
            smurfs: action.payload,
            isFetching: false,
            error: ''
         }
      case DELETE_FAIL:
         return {
            ...state,
            error: action.payload
         }
      case TOGGLE_EDIT:
         return {
            ...state,
            isEditing: !state.isEditing,
            smurfToEdit: action.payload
         }
      default:
         return state
   }
}