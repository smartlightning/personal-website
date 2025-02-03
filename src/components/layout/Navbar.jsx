import React from 'react';
import { FaAngleDown, FaImages, FaUser } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='navbar bg-base-100'>
      <div className='flex-1'>
        <a className='btn btn-ghost normal-case text-xl' href='/'>Chris McQueen</a>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal p-0'>
          <li>
            <a href='/gallery'>
              Gallery
              <FaImages />
            </a>
          </li>
          <li tabIndex='0'>
            <a href='/parent'>
              Parent
              <FaAngleDown />
            </a>
            <ul className='p-2 bg-base-100'>
              <li>
                <a href='/gallery'>Submenu 1</a>
              </li>
              <li>
                <a href='/gallery'>Submenu 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a href='/about'>
              About
              <FaUser />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
