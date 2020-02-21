import React from 'react';

const Smurf = ({ smurf }) => {
   const { name, age, height } = smurf
   return (
      <div className='smurf'>
         <h4>Name: {name}</h4>
         <h4>Age: {age}</h4>
         <h4>Height: {height}</h4>
      </div>
   );
}

export default Smurf;
