import React, { useState, useEffect } from 'react';

const SmurfForm = ({ postSmurf, editSmurf }) => {
   const [smurf, setSmurf] = useState({
      name: '',
      age: 0,
      height: '',
      id: Date.now()
   })
   const handleChange = e => {
      setSmurf({
         ...smurf,
         [e.target.name]: e.target.value
      })
   }
   const handleSubmit = e => {
      e.preventDefault()
      postSmurf(smurf)
      setSmurf({
         name: '',
         age: 0,
         height: '',
         id: Date.now()
      })
   }
   useEffect(() => {

   }, [isEditing])
   return (
      <form onSubmit={handleSubmit} className='form'>
         <input className='input' onChange={handleChange} value={smurf.name} name='name' placeholder='name' type='text' />
         <input className='input' onChange={handleChange} value={smurf.age} name='age' placeholder='age' type='number' />
         <input className='input' onChange={handleChange} value={smurf.height} name='height' placeholder='5cm' type='text' />
         <button className='btn' type='submit' >Add Smurf</button>
      </form>
   );
}

export default SmurfForm;