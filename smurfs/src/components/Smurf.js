import React from 'react';

const Smurf = ({ smurf, deleteSmurf }) => {
   const { name, age, height } = smurf
   return (
      <div className='smurf'>
         <div className='x-div'><button onClick={() => deleteSmurf(smurf)} className='x'>X</button></div>
         <h4>Name: {name}</h4>
         <h4>Age: {age}</h4>
         <h4>Height: {height}</h4>
         <button className='btn'>Edit</button>
      </div>
   );
}

export default Smurf;
