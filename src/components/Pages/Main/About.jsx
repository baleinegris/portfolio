import React from "react";
import { motion } from "framer-motion";
import {fadeIn, textVariant} from "../../../assets/util/motion";
import { technologies } from "../../../assets/constants";
import BallCanvas from "./Ball";

function About() {
    return (
        <div className="bg-[#1881b6]">
        <motion.div variants={fadeIn} className=" pt-[50px] w-full h-full flex flex-col justify-center items-center">
            <div className='text-[30px] text-white font-bold  w-[40%]'>
                About
            </div>
            <div className='text-[20px] text-white w-[40%]'>
                I am a Computer Science student at the University of Toronto. I am passionate about software development and I am always looking 
                for new opportunities to learn and grow. I have experience with full-stack web development and data science, and expertise in React.
            </div>
        </motion.div>
        <div className='flex flex-row justify-center items-center flex-wrap'>
        {technologies.map((tech, index) =>
        {
            return <BallCanvas imgUrl={tech.icon} name={tech.name} />
        }
        )}
        </div>
        </div>
    )
};

export default About;