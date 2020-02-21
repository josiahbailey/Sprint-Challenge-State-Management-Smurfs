import { FETCH_SMURFS, FETCH_SUCCESS, FETCH_FAIL, POST_SMURF, POST_SUCCESS, POST_FAIL } from '../actions'

const intitialState = {
   smurfs: [],
   isFetching: false,
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
      default:
         return state
   }
}