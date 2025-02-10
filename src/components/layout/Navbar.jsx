import React from 'react'
import {
  FaAngleDown,
  FaCode,
  FaCubes,
  FaImages,
  FaPhone,
  FaUser,
} from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="navbar fixed z-10 bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl" href="/">
          Chris McQueen
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a href="/gallery">
              <FaImages />
              Gallery
            </a>
          </li>
          <li tabIndex="0">
            <a href="/parent">
              <FaCubes />
              Offers
              <FaAngleDown />
            </a>
            <ul className="p-2 bg-base-100">
              <li>
                <a href="/gallery">
                  <FaCode />
                  Web Development
                </a>
              </li>
              <li>
                <a href="/gallery">
                  <FaPhone />
                  Consulting
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/about">
              <FaUser />
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
