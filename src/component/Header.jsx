import React, {useEffect, useState} from 'react';
import {FaShoppingCart} from 'react-icons/fa';
import {HashLink} from "react-router-hash-link";

const Header = () => {
        const [isOpen, setIsOpen] = useState(false);
const [categories, setCategories] = useState([]);
    useEffect(()=>{
        return () => {
            fetch('http://localhost:3001/categories')
                .then(response => response.json())
                .then(data => setCategories(data))
                .catch(error => console.error('Error fetching categories:', error))
        };

    },[])

        return (
            <header className="bg-gradient-to-b from-[#191919] to-green-950 shadow-md z-50 w-full fixed top-0">
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    {/* Logo */}
                    <h1 className="flex items-center gap-2 font-semibold text-lg md:text-xl cursor-pointer">
                        <img
                            src="/svg/logo.svg"
                            alt="Logo"
                            className="w-10 h-10 rounded-full object-cover"
                        />
                        <span
                            className="bg-gradient-to-br from-lime-300 via-green-500 to-green-700 bg-clip-text text-transparent text-bordered">
                        Green Basket
                    </span>
                    </h1>

                    {/* Search Bar */}
                    <div className="hidden md:flex flex-1 mx-4 max-w-xs">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full px-3 py-1.5 rounded-md bg-white text-gray-800 placeholder-gray-500 text-sm focus:outline-none"
                        />
                    </div>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center justify-between flex-1 gap-6">
                        {/* Nav Links */}
                        <ul className="flex items-center space-x-6 text-gray-200 text-sm font-light">
                            <li><HashLink smooth to="/#home" className="hover:text-gray-50">Home</HashLink></li>
                            <li><HashLink smooth to="/#about" className="hover:text-gray-50">About</HashLink></li>
                            <li><HashLink smooth to="/#contact" className="hover:text-gray-50">Contact</HashLink></li>
                        </ul>

                        {/* Category Select */}
                        <select
                            className="bg-transparent text-gray-200 font-light text-sm px-3 py-1.5 rounded-md focus:outline-none"
                            defaultValue=""
                        >
                            <option value="" disabled>Select Category</option>
                            {categories.map((category, idx) => (
                                <option key={idx} value={category.name}>{category.name}</option>
                            ))}
                        </select>

                        {/* Auth & Cart */}
                        <div className="flex items-center space-x-4 text-gray-200">
                            <a href="/signin" className="text-sm hover:underline">Sign In</a>
                            <a
                                href="/signup"
                                className="bg-green-800 hover:bg-green-900 text-white text-sm px-4 py-1 rounded"
                            >
                                Sign Up
                            </a>
                            <a href="/cart" className="relative flex items-center">
                                <FaShoppingCart className="text-xl hover:text-gray-100"/>
                                <span
                                    className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1 rounded-full">2</span>
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-200"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M6 18L18 6M6 6l12 12"/>
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M4 6h16M4 12h16M4 18h16"/>
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden px-4 pb-6 pt-4 bg-green-950 text-gray-200 space-y-3 absolute w-full left-0 top-16">
                        <input
                            type="text"
                            placeholder="Search vegetables..."
                            className="w-full px-3 py-2 rounded-md bg-white text-gray-800 placeholder-gray-500 text-sm"
                        />
                        <select
                            className="w-full px-3 py-2 rounded-md bg-transparent outline-none text-gray-200 text-sm"
                            defaultValue=""
                        >
                            <option value="">Select Category</option>
                            {categories.map((category, idx) => (
                                <option key={idx} value={category.name}>{category.name}</option>
                            ))}
                        </select>
                        <ul className="space-y-2 text-sm">
                            <li><HashLink smooth to="/#home" onClick={() => setIsOpen(false)}
                                          className="block hover:text-gray-100">Home</HashLink></li>
                            <li><HashLink smooth to="/#about" onClick={() => setIsOpen(false)}
                                          className="block hover:text-gray-100">About</HashLink></li>
                            <li><HashLink smooth to="/#contact" onClick={() => setIsOpen(false)}
                                          className="block hover:text-gray-100">Contact</HashLink></li>
                            <li><HashLink to="/cart" onClick={() => setIsOpen(false)}
                                          className="block hover:text-gray-100">Cart</HashLink></li>
                            <li><HashLink to="/signin" onClick={() => setIsOpen(false)}
                                          className="block hover:text-gray-100">Sign In</HashLink></li>
                            <li><HashLink to="/signup" onClick={() => setIsOpen(false)}
                                          className="block hover:text-gray-100">Sign Up</HashLink></li>
                        </ul>
                    </div>
                )}
            </header>
        )
            ;
    }
;

export default Header;