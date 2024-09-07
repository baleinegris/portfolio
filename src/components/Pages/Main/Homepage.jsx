import React from "react";
import Main from "./Main";
import About from "./About";
import BottomSeparator from "./BottomSeparator";
import Projects from "./Projects";
import Contact from "./Contact";
function Homepage() {
    return (
        <>
        <Main/>
        <About/>
        <BottomSeparator/>
        <Projects/>
        <div className='h-[1000px] bg-gradient-to-b from-transparent to-[#010015]'></div>
        <Contact/>
        </>
    );
}

export default Homepage;