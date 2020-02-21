import axios from 'axios'

export const FETCH_SMURFS = 'FETCH_SMURFS'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAIL = 'FETCH_FAIL'

export const getSmurfs = () => dispatch => {
   dispatch({ type: FETCH_SMURFS })
   axios.get(`http://localhost:3333/smurfs`)
      .then(res => {
         dispatch({ type: FETCH_SUCCESS, payload: res.data })
      })
      .catch(err => {
         console.log(err)
         dispatch({ type: FETCH_FAIL, payload: err })
      })
}


export const POST_SMURF = 'POST_SMURF'
export const POST_SUCCESS = 'POST_SUCCESS'
export const POST_FAIL = 'POST_FAIL'

export const postSmurf = smurf => dispatch => {
   dispatch({ type: POST_SMURF })
   axios.post(`http://localhost:3333/smurfs`, smurf)
      .then(res => {
         dispatch({ type: POST_SUCCESS, payload: res.data })
      })
      .catch(err => {
         console.log(err)
         dispatch({ type: POST_FAIL, payload: err })
      })
}