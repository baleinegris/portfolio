import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import '../../index.css';
import { ProjectsContext, ContactContext } from '../../contexts/ProjectsProvider';

function Navbar() {
    const [active, setActive] = useState('Home');
    const projectsRef = useContext(ProjectsContext);
    const contactRef = useContext(ContactContext);

    const navigate = useNavigate();

    const handleProjectsClick = () => {
        setActive('Projects');
        navigate('/', { replace: true });
        setTimeout(() => {
            projectsRef.current.scrollIntoView({ behavior: 'smooth', block: "end", inline: "nearest"});
        }, 100); // Adjust the timeout as needed
    };

    const handleContactClick = () => {
        setActive('Contact');
        navigate('/', { replace: true });
        setTimeout(() => {
            contactRef.current.scrollIntoView({ behavior: 'smooth'});
        }, 100); // Adjust the timeout as needed
    };

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

            <div className="w-full flex justify-end items-center">
            <Link 
                    to='/'
                    className={`relative text-white font-bold text-[18px] cursor-pointer mx-[10px] navbutton ${active === 'Resume' ? 'active' : ''}`}
                    onClick={() => {
                        setActive('Resume');
                        window.scrollTo(0, 0);
                    }}
                >
                    Home
                </Link>
                <div 
                    to='/'
                    className={`relative text-white font-bold text-[18px] cursor-pointer mx-[10px] navbutton ${active === 'Projects' ? 'active' : ''}`}
                    onClick={() => {
                        handleProjectsClick();
                    }}
                >
                    Projects
                </div>
                <Link 
                    to='/resume'
                    className={`relative text-white font-bold text-[18px] cursor-pointer mx-[10px] navbutton ${active === 'Resume' ? 'active' : ''}`}
                    onClick={() => {
                        setActive('Resume');
                        window.scrollTo(0, 0);
                    }}
                >
                    Resume
                </Link>
                <div 
                    className={`relative text-white font-bold text-[18px] cursor-pointer mx-[10px] navbutton${active === 'Contact' ? 'active' : ''}`}
                    onClick={() => {
                        handleContactClick();
                    }}
                >
                    Contact
                </div>
            </div>
        </nav>
    );
}

export default Navbar;