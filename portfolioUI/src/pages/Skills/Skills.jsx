import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaJava, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaNetworkWired } from "react-icons/fa";
import { SiMongodb, SiExpress, SiSpringboot, SiTailwindcss, SiFirebase, SiCplusplus } from "react-icons/si";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", icon: <FaReact className="text-blue-500" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-700" /> },
      { name: "Spring Boot", icon: <SiSpringboot className="text-green-700" /> },
      { name: "Java", icon: <FaJava className="text-red-600" /> }
    ]
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "SQL / RDBMS", icon: <FaDatabase className="text-indigo-700" /> }
    ]
  },
  {
    category: "Others",
    items: [
      { name: "Git & GitHub", icon: <FaGitAlt className="text-red-500" /> },
      { name: "Networking", icon: <FaNetworkWired className="text-gray-800" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-700" /> }
    ]
  }
];

export default function SkillsPage() {
  return (
    <>
        <Header/>

                    <section className="max-w-7xl mx-auto px-6 py-20">
      <motion.h2
        className="text-5xl font-extrabold text-center mb-16 text-purple-800 drop-shadow-md"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Skills 🚀
      </motion.h2>

      <div className="grid gap-12 md:grid-cols-2 mt-5">
        {skills.map((skillGroup, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-purple-700 mb-6">
              {skillGroup.category}
            </h3>
            <ul className="space-y-4">
              {skillGroup.items.map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-lg text-gray-800">
                  <span className="text-2xl">{item.icon}</span>
                  {item.name}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>

        <Footer/>
    
    </>
  );
}
