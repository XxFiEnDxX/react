import React from 'react';
import { NavLink,Link } from "react-router-dom";

function Header() {
    return (
        <>
            <div className='w-full flex flex-col items-center  bg-[#fdedff] uppercase italic font-medium'>

                <h1 className="uppercase italic font-semibold text-[40px] h-[80px]">Amit.Fiend</h1>

                <div className='flex justify-between items-center w-full h-[80px] uppercase italic font-medium border-y-2 border-black'>

                    <div className='flex h-full items-center'>
                        <NavLink to='/' className=' px-7'>Home</NavLink>
                        <NavLink to='/about' className=' px-7'>About</NavLink>
                        <NavLink to='/contact' className=' px-7'>Contact</NavLink>
                        <NavLink to='/user/4' className=' px-7'>User</NavLink>
                    </div>

                    <div className='flex h-full items-center border-l-2 border-black'>
                        <NavLink to='' className=' px-7'>Log In</NavLink>
                        <div className='bg-black h-full flex items-center'>
                            <NavLink to='' className=' px-7 text-[#fdedff]'>Sign Up</NavLink>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Header;