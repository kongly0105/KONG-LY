import React, { useState } from "react";

// icon 
import { MdLocalShipping } from 'react-icons/md';
import { AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai';
import { FiInstagram } from 'react-icons/fi';
import { FaPinterestP } from 'react-icons/fa';

// link 
// import { Link, NavLink } from 'react-router-dom';
import navLink from "./navLink";
import { NavLink } from "react-router-dom";
// console.log(nav__links);

const Navbar = () => {

    const [nav, setNav] = useState(false)

    const [activeMenu, setActiveMenu] = useState(1)
    const handleClick = (id) => {
        setActiveMenu(id)
    }

    return (
        <div>
            <nav className="bg-white w-full border-b ">
                <div className="hidden lg:flex mx-auto justify-between  py-5 container px-6">
                    <div className='flex items-center gap-3'>
                        <div onClick={() => setNav(!nav)} className='header__left-shipping'>
                            <MdLocalShipping size={30} />
                        </div>
                        <h1>FREE SHIPPING OVER $100</h1>
                    </div>
                    <div className="flex justify-between gap-3">
                        <div className='flex items-center px-12'>
                            <p className="px-6">Shipping</p>
                            <p className="px-6">FAQ</p>
                            <p className="px-6">Contact</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div onClick={() => setNav(!nav)} className='header__left-shipping'>
                                <AiFillFacebook size={20} />
                            </div>
                            <div onClick={() => setNav(!nav)} className='header__left-shipping'>
                                <AiOutlineTwitter size={20} />
                            </div>
                            <div onClick={() => setNav(!nav)} className='header__left-shipping'>
                                <FiInstagram size={20} />
                            </div>
                            <div onClick={() => setNav(!nav)} className='header__left-shipping'>
                                <FaPinterestP size={20} />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="hidden lg:flex mx-auto justify-between  py-5 container px-6">
               
                <div>
                    {navLink.map((item)=>(
                        <NavLink
                                to={item.path}
                                className={`${activeMenu === item.id ? 'setActiveMenu' : ""}`}
                                key={item.id}
                            >
                                {item.display}
                            </NavLink>
                    ))}
                </div>
                <div className="flex gap-3">
                    <div className="py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </div>
                    <div className="py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                        </svg>
                    </div>
                    <div className="py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                    </div>
                    <div className="py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                    </div>
                </div>
            </div>

        </div>


    );
}

export default Navbar;
