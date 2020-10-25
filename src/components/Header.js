// Header component
import React from 'react';

// components
import {Navigation} from './Navigation';

export const Header = () => {
  return (
    <header>
      <div className= 'headerTop'>
        <h1>Conway's Game of Life</h1>
        <i className="menuIcon fas fa-bars"></i>
      </div>
        <div className= 'headerBottom'>
          <Navigation />
        </div>
    </header>
  )
}
