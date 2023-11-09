import React from 'react';
import rvlogo from './images/logo.png';
import cflogo from './images/concreteFair.png';

const Header = () => {
  return (
    <div className='main-header-container'>
          <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-4 flex-row items-center justify-between ">
          <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center md:mb-0">
            <img
              className="w-16 h-16 text-white pt-1 mr-2"
              src={rvlogo}
              alt="rv"
            />
            </a>
            <h2 className="font-bold text-black">ADVAYA S11</h2>
            <a className="flex lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center md:mb-0">
            <img
              className="w-16 h-16 text-white rounded-full mr-2 pt-0"
              src={cflogo}
              alt="cf"
            />
          </a>
        </div>
      </header>
    </div>
  )
}

export default Header