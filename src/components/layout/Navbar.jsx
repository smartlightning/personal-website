import React, { useState } from 'react'
import {
  FaAngleDown,
  FaCode,
  FaCubes,
  FaImages,
  FaPhone,
  FaUser,
  FaBars,
  FaTimes,
  FaAngleRight,
} from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="navbar fixed z-10 bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl" href="/">
          Chris McQueen
        </a>
      </div>
      <div className="flex-none">
        {/* Hamburger menu for mobile */}
        <button className="btn btn-ghost lg:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <>
              Close <FaTimes />
            </>
          ) : (
            <>
              Menu <FaBars />
            </>
          )}
        </button>
        {/* Desktop menu */}
        <ul className="menu menu-horizontal p-0 hidden lg:flex">
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
      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 right-0 bg-base-100 w-full">
          <ul className="menu p-4">
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
                <FaAngleRight />
              </a>
              <ul className="px-2 bg-base-100">
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
      )}
    </nav>
  )
}

export default Navbar
