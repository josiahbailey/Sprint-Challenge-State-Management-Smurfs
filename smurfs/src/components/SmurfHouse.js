import React from 'react';

import Smurf from './Smurf'

const SmurfHouse = ({ smurfs, isFetching, error }) => {
   return (
      <div className='house'>
         {isFetching ? <h3>LOADING...</h3> : error ? <h3>ERROR</h3> :
            smurfs.map(smurf => (
               <Smurf smurf={smurf} />
            ))
         }
      </div>
   );
}

export default SmurfHouse;