import React, { useEffect } from "react";

import { connect } from 'react-redux'
import { getSmurfs, postSmurf, editSmurf, toggleEdit, deleteSmurf } from '../actions'

import SmurfHouse from './SmurfHouse'
import SmurfForm from './SmurfForm'
import "./App.css";

const App = ({ smurfs, isFetching, error, getSmurfs, postSmurf, editSmurf, deleteSmurf, toggleEdit }) => {
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
            deleteSmurf={deleteSmurf}
            toggleEdit={toggleEdit} />
      </div>
   );
}


const mapStateToProps = state => (
   {
      smurfs: state.smurfs,
      isFetching: state.isFetching,
      isEditing: state.isEditing,
      smurfToEdit: state.smurfToEdit,
      error: state.error
   }
)

export default connect(mapStateToProps, { getSmurfs, postSmurf, editSmurf, deleteSmurf, toggleEdit })(App);
