import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-[#1a1f1a] to-green-950 text-gray-100 py-10 border-t border-green-800 w-full z-10">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

                {/* Shop Info */}
                <div>
                    <h1 className="flex items-center gap-2 font-semibold text-lg md:text-xl cursor-pointer">
                        <img
                            src="/svg/logo.svg"
                            alt="Logo"
                            className="w-10 h-10 rounded-full object-cover"
                        />
                        <span className="bg-gradient-to-br from-lime-300 via-green-500 to-green-700 bg-clip-text text-transparent text-bordered">
                            Green Basket
                        </span>
                    </h1>
                    <p className="text-gray-300 text-sm mt-4">
                        Your trusted source for fresh, local vegetables  handpicked daily for quality and taste.
                    </p>
                    <div className="mt-4 text-sm leading-relaxed">
                        <p>📍 123 Market Road, Colombo, Sri Lanka</p>
                        <p>📞 +94 76 655 3936</p>
                        <p>✉️ support@greenbasket.lk</p>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-gray-200">
                        <li><a href="#" className="hover:text-gray-300">Home</a></li>
                        <li><a href="#" className="hover:text-gray-300">About Us</a></li>
                        <li><a href="#" className="hover:text-gray-300">Our Products</a></li>
                        <li><a href="#" className="hover:text-gray-300">Contact</a></li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Helpful Resources</h3>
                    <ul className="space-y-2 text-sm text-gray-200">
                        <li><a href="#" className="hover:text-gray-300">Vegetable Guide</a></li>
                        <li><a href="#" className="hover:text-gray-300">Seasonal Produce</a></li>
                        <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-gray-300">Terms of Service</a></li>
                    </ul>
                </div>

                {/* Newsletter & Social */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Subscribe & Follow</h3>
                    <form className="mb-4">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="w-full p-2 rounded bg-gray-200 outline-none text-gray-700 placeholder-gray-500 text-sm"
                        />
                        <button className="mt-2 w-full bg-green-700 hover:bg-green-900 text-white font-medium p-2 rounded">
                            Subscribe
                        </button>
                    </form>
                    <div className="flex space-x-4 text-xl">
                        <a href="#"><FaFacebook className="hover:text-gray-300" /></a>
                        <a href="#"><FaInstagram className="hover:text-gray-300" /></a>
                        <a href="#"><FaLinkedin className="hover:text-gray-300" /></a>
                        <a href="#"><FaTwitter className="hover:text-gray-300" /></a>
                    </div>
                </div>
            </div>

            <div className="mt-10 text-center text-gray-400 text-sm">
                &copy; 2025 Green Basket. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;