import React, { useContext } from "react";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";
import { projects, technologyColors } from "../../../assets/constants";
import { ProjectsContext } from '../../../contexts/ProjectsProvider';


function Projects(){

    const projectsRef = useContext(ProjectsContext);

    return (
        <div className="bg-glass backdrop-blur-sm mx-10 rounded-xl shadow-2xl border-glass border-[1px]" ref={projectsRef}>
            <motion.div className=" pt-[50px] w-full h-full flex flex-col justify-center items-center">
                <div className='text-[30px] text-white font-bold  w-[40%]'>
                    Projects
                </div>
                <div className='text-[20px] text-white w-[40%]'>
                    Here are some projects I created:
                </div>
                <div className="text-white opacity-50">
                (Click on them to view in a new tab)
                </div>
            </motion.div>
            <div className='flex flex-row justify-center items-center flex-wrap'>
            {projects.map((project, index) =>
                {
                    return (
                    <a href={project.link} target="_blank" rel="noreferrer" className="no-underline p-4" key={index}>
                    <Tilt className="Tilt tilt-outer rounded-lg flex flex-col items-center justify-center p-[5px] cursor-pointer" options={{ max : 25, scale: 1, reset: true, transition: true, speed: 1, easing: "cubic-bezier(.03,.98,.52,.99)"}} >
                        <div className="Tilt-inner p-6 w-[400px] h-[500px] flex flex-col rounded-lg gap-1 relative bg-tertiary">
                            <img src={project.img} className="w-[full] h-[auto] rounded-lg border-white-100"/>
                            <div className="text-white text-[1.5rem] font-bold underline">{project.name}</div>
                            <div className="text-white text-[1rem]">{project.description}</div>
                            <div className="font-bold bg-gray-800 technologies flex flex-row justify-center items-center flex-wrap gap-2 bottom-0 left-0 absolute w-full rounded-b-lg">
                            {project.technologies.map((tech, index) =>
                                {
                                    return (
                                    <div className={`${technologyColors[tech]}`}>{tech}</div>
                                    )
                                }
                                )}
                            </div>
                        </div>
                    </Tilt>
                    </a>
                    )
                }
                )}
            </div>
        </div>
    )
}

export default Projects;