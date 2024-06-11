// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 bg-gradient-to-r from-cyan-500 to-sky-500">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold">
          <Link to="/">lab-name</Link>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}
              />
            </svg>
          </button>
        </div>
        <ul className={`lg:flex space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
          <li>
            <Link to="/about" className="text-gray-300 hover:text-white">
              About
            </Link>
          </li>
          <li>
            <Link to="/opportunities" className="text-gray-300 hover:text-white">
              Opportunities
            </Link>
          </li>
          <li>
            <Link to="/Outreach" className="text-gray-300 hover:text-white">
              Outreach
            </Link>
          </li>
          <li>
            <Link to="/Publications" className="text-gray-300 hover:text-white">
              Publications
            </Link>
          </li>
          <li>
            <Link to="/Research" className="text-gray-300 hover:text-white">
              Research
            </Link>
          </li>
          <li>
            <Link to="/Team" className="text-gray-300 hover:text-white">
              Team
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
