
import React from 'react';
import TopBar from "./TopBar/TopBar";
import MenuHome from './Menu/Menu';

export default function Header() {
  
  return (
    <header className='header'>
      <TopBar/>
      <MenuHome/>   
    </header>
  )
}
