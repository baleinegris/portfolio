import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import '../../index.css';

function Navbar() {
    const [active, setActive] = useState('Home');

    return (
        <nav className="w-full flex items-center py-5 fixed top-0 z-20 bg-primary h-[140px]">
            <div className="w-full flex justify-left items-center mx-auto">
            <Link 
                to='/'
                className="flex items-center gap-2"
                onClick={() => {
                    setActive('Home');;
                    window.scrollTo(0, 0);
                }}
            >
                <img src={logo} alt="logo" className="h-32 w-32 object-contain" />
                <p className="text-white font-bold text-[18px] cursor-pointer">Oscar Heath | Baleinegris</p>
            </Link>
            </div>
        </nav>
    );
}

export default Navbar;