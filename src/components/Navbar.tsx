"use client";

import React, { useState } from 'react'
import Logo from './Logo'
import NavBtns from './NavBtns'
import Search from './Search'
import CartIcon from './CartIcon'
import { AlignRight } from 'lucide-react'
import { X } from 'lucide-react';

function Navbar() {
  return (
    <div className='
        max-[650px]:m-[2rem] 
        
        max-[1000px]:m-[4rem] 
        
        max-[1210px]:m-[2rem]

        my-[2rem] mx-[6rem]
    '>
    <div className="flex justify-between items-center w-[1040px] m-auto">
      <Logo />
      <NavBtns />
      <Search />
      <CartIcon />
    </div>
    </div>
  )
}

function MobileNavbar() {
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <div className={`nav_mobile-box ${showOverlay && 'mb-[3.9rem]'}`}>
      <div className={`
      ${showOverlay && `h-screen flex bg-white flex-col items-center justify-center fixed top-0 left-0 w-full z-[3] transition-all duration-500 ease-in-out`}
      `}>
      {!showOverlay && <div className="flex items-end justify-end"><AlignRight className="cursor-pointer" width="40" height="30" onClick={() => setShowOverlay(true)} /></div>}
      <div>
        <div className="flex justify-between items-center m-auto">
          <div className='absolute top-8 left-8 cursor-pointer'>
            <Logo />
          </div>
          {showOverlay && (<X className="cursor-pointer absolute top-8 right-8" width="40" height="30" onClick={() => setShowOverlay(false)} />)}
        </div>
        {showOverlay && (<div className="flex flex-col items-center text-center gap-[1rem] justify-center">
            <CartIcon />
            <NavBtns className='text-center flex flex-col gap-4' />
        </div>)}
        </div>
    </div>
</div>  )
}

export {
  Navbar,
  MobileNavbar
}

// display: flex;
// text-align: center;
// flex-direction: column;
// align-items: center;
// gap: 1rem;