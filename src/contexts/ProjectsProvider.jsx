import React, { createContext, useRef } from 'react';

const ProjectsContext = createContext();
const ContactContext = createContext();

const ProjectsProvider = ({ children }) => {
    const projectsRef = useRef(null);

    return (
        <ProjectsContext.Provider value={projectsRef}>
            {children}
        </ProjectsContext.Provider>
    );
};

const ContactProvider = ({ children }) => {
    const contactRef = useRef(null);

    return (
        <ContactContext.Provider value={contactRef}>
            {children}
        </ContactContext.Provider>
    );
};

export { ProjectsContext, ProjectsProvider, ContactContext, ContactProvider };