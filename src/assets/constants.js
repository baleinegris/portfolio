import { m } from "framer-motion"
import portfolioPic from "./portfolioPic.png"
import ripplePic from "./ripplePic.png"
import scrabblePic from "./scrabblePic.png"
import josephPic from "./josephPic.png"
import baleinegrisPic from "./baleinegrisPic.png"
import floodFillPic from "./flood-fill-img.png"

export const technologies = [
    {
        name: "React",
        icon: "reactjs.png",
    },
    {
        name: "JavaScript",
        icon: "javascript.png",
    },
    {
        name: "TypeScript",
        icon: "typescript.png",
    },
    {
        name: "Python",
        icon: "python.png",
    },
    {
        name: "Java",
        icon: "java.png",
    },
    {
        name: "HTML",
        icon: "html.png",
    },
    {
        name: "CSS",
        icon: "css.png",
    },
    {
        name: "GitHub",
        icon: "github.png",
    },
    {
        name: "SQL",
        icon: "sql.png",
    },
    {
        name: "GCP",
        icon: "gcp.png",
    },
    {
        name: "Firebase",
        icon: "firebase.png",
    },
    {
        name: "Three.js",
        icon: "threejs.svg",
    },
    {
        name: "Tailwind",
        icon: "tailwind.png",
    },
    {
        name: "C",
        icon: "C.png",
    }
]

export const projects = [
    {
        name: "Flood Fill",
        img: floodFillPic,
        description: "Web App that uses a custom trained Neural Net to make predictions on flood risks for users to invest confidently. 2nd Place Winner of NewHacks 2024.",
        link: "https://devpost.com/software/flood-fill",
        technologies: ["React", "Tailwind", "Python"],
    },
    {
        name: "Portfolio",
        img: portfolioPic,
        description: "This website! Built with React, Tailwind CSS, and Three.js.",
        link: "",
        technologies: ["React", "Tailwind", "Three.js"],
    }, 
    {
        name: "Scrabble",
        img: scrabblePic,
        description: "Online Multiplayer Scrabble web application that allows users to create games, join games, and play against each other in real-time.",
        link: "https://withcomment.github.io/scrabble/",
        technologies: ["React", "Java"],

    },
    {
        name: "Ripple: AI Playlist Extender",
        img: ripplePic,
        description: "Web application that allows users to sign into their Spotify account and extend their playlists by using Suno AI to AI generate brand new music that matches the feel of the playlist.",
        link: "https://baleinegris.github.io/suno-extender/",
        technologies: ["React", "Python", "Firebase"],

    }, 
    {
        name: "Joseph Heath Website",
        img: josephPic,
        description: "Personal website created for Professor Joseph Heath at the University of Toronto.",
        link: "http://individual.utoronto.ca/jheath/",
        technologies: ["React"],
    },
    {
        name: "Personal Website",
        img: baleinegrisPic,
        description: "My first website created. Personal website for blogging and updates. Includes a working Tetris game!",
        link: "https://baleinegris.github.io/",
        technologies: ["HTML", "CSS", "JavaScript"],
    }
]

export const technologyColors = {
    "React": "bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent",
    "JavaScript": "bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent",
    "TypeScript": "bg-clip-text text-transparent",
    "Python": "bg-gradient-to-r from-yellow-300 from-50% to-blue-600 bg-clip-text text-transparent",
    "Java": "bg-gradient-to-r from-red-700 to-red-800 bg-clip-text text-transparent",
    "HTML": "bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent",
    "CSS": "bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent",
    "GitHub": "#181717 bg-clip-text text-transparent",
    "SQL": "#4479A1 bg-clip-text text-transparent",
    "GCP": "#4285F4 bg-clip-text text-transparent",
    "Firebase": "bg-gradient-to-r from-orange-500 to-yellow-300 bg-clip-text text-transparent",
    "Three.js": "bg-gradient-to-r to-black from-slate-900 bg-clip-text text-transparent",
    "Tailwind": "bg-cyan-300 bg-clip-text text-transparent",
}