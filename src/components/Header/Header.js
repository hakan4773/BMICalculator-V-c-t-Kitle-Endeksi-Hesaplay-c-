import React from 'react';
import { NavLink } from 'react-router-dom';
function Header() {
  return (
    <div className='header'>
      <nav>
      <div className='nav-items container'>
        <ul className='list'>
          <li>
      <NavLink to={"/BMIhesapla"} end className={({isActive})=>isActive ? 'active-link' : ''}>BMI Hesapla</NavLink>    
            </li>   
      <li>
      <NavLink to={"/BMInedir"} className={({isActive})=>isActive ? 'active-link' : ''}>BMI Nedir?</NavLink>
      </li>
      <li>
      <NavLink to={"/Diyetlistesi"} className={({isActive})=>isActive ? 'active-link' : ''}>Diyet Listesi</NavLink>
      </li>
      </ul>
      </div>
      </nav>
    </div>
  );
}

export default Header;
