import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import festImg from "../../assets/projects/fest_registration.png";
import ecomImg from "../../assets/projects/ecommerce_platform.png";
import photoImg from "../../assets/projects/photography_website.jpeg";
import tictactoeImg from "../../assets/projects/tictactoe.png";
import pokemonImg from "../../assets/projects/pokemon.png";
import githubImg from "../../assets/projects/github_api.png";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const projects = [
  {
    title: "Fest Registration System",
    description:
      "A digital event registration system for managing college fest registrations, developed with MERN Stack.",
    technologies: ["React", "Express", "MongoDB"],
    image: festImg,
    github: "https://github.com/AbhijitDevghare/fest-registration",
    live: "https://fest-registration-client.vercel.app/"
  },
  {
    title: "E-commerce Platform (Electronics)",
    description:
      "A comprehensive electronics e-commerce platform with payment system, admin dashboard, analytics, and customer support.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    image: ecomImg,
    github: "https://github.com/AbhijitDevghare/TechnoGears-An-Ecommerce-Platform-for-Ecommece-Products",
    live: "https://github.com/AbhijitDevghare/TechnoGears-An-Ecommerce-Platform-for-Ecommece-Products"
  },
  {
    title: "Photography Website (CRUD)",
    description:
      "A full CRUD photography website for a friend's business built with React and Firebase for dynamic content management.",
    technologies: ["React", "Firebase", "Tailwind"],
    image: photoImg,
    github: "https://github.com/AbhijitDevghare/ImageStationPhotography",
    live: "https://image-station-photography.vercel.app/"
  },
  
  {
    title: "Pokemon React App",
    description:
      "A React app that fetches Pokemon data using HTTPS from the PokeAPI with search and display functionality.",
    technologies: ["React", "Axios", "PokeAPI"],
    image: pokemonImg,
    github: "https://github.com/AbhijitDevghare/pokemon-react-app",
    live: "https://pokemon-react-app-seven.vercel.app/"
  },
  {
    title: "GitHub API Search App",
    description:
      "A GitHub profile finder app built using GitHub's REST API that shows user details and repositories.",
    technologies: ["React", "GitHub API", "Axios"],
    image: githubImg,
    github: "https://github.com/AbhijitDevghare/",
    live: "https://git-hub-api-search-app.vercel.app/"
  },{
    title: "Tic Tac Toe",
    description:
      "A simple and fun Tic Tac Toe game built with React, featuring two-player mode and basic game logic.",
    technologies: ["React", "CSS"],
    image: tictactoeImg,
    github: "https://github.com/AbhijitDevghare/",
    live: "https://tic-tac-toe-react-dun-phi.vercel.app//"
  }
];

export default function ProjectPage() {
  return (

    <>
    <Header/>              
    <section className="max-w-7xl mx-auto px-6 py-20 mt-5">
      <motion.h2
        className="text-5xl font-extrabold text-center mb-16 text-blue-900 drop-shadow-md"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects 💻
      </motion.h2>

      <div className="grid gap-14 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white overflow-hidden"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-800 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900 text-xl"
                >
                  <FaGithub />
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 text-xl"
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    <Footer/>
    </>
  );
}