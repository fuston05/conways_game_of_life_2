import React from 'react';
import './Navigation.scss';

export const Navigation= () => {
  return(
    <div className= 'navigationCont'>
      <h2>Help!</h2>
      <button>Start</button>
      <button>Randomize Grid</button>
      <button>Reset Grid</button>
      <input 
        type= 'color'
        id= 'liveColor'
        name= 'liveColor'
        value= '#228B22'
      />

    </div>
  )
}