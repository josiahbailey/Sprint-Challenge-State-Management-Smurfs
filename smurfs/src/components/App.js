import React, { useEffect } from "react";

import { connect } from 'react-redux'
import { getSmurfs, postSmurf, editSmurf, deleteSmurf } from '../actions'

import SmurfHouse from './SmurfHouse'
import SmurfForm from './SmurfForm'
import "./App.css";

const App = ({ smurfs, isFetching, error, getSmurfs, postSmurf, editSmurf, deleteSmurf }) => {
   useEffect(() => {
      getSmurfs()
   }, [])

   return (
      <div className="App">
         <h1>Wecome to your Smurf House!</h1>
         <SmurfForm
            postSmurf={postSmurf}
            editSmurf={editSmurf} />
         <h2>House</h2>
         <SmurfHouse
            error={error}
            isFetching={isFetching}
            smurfs={smurfs}
            deleteSmurf={deleteSmurf} />
      </div>
   );
}


const mapStateToProps = state => (
   {
      smurfs: state.smurfs,
      isFetching: state.isFetching,
      error: state.error
   }
)

export default connect(mapStateToProps, { getSmurfs, postSmurf, editSmurf, deleteSmurf })(App);
