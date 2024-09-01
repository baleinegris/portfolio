import React from "react";
import Main from "./Main";
import About from "./About";
import BottomSeparator from "./BottomSeparator";
import Projects from "./Projects";
function Homepage() {
    return (
        <>
        <Main/>
        <About/>
        <BottomSeparator/>
        <Projects/>
        </>
    );
}

export default Homepage;