import { FaReact, FaNodeJs, FaDatabase, FaJava, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { SiSpringboot, SiMongodb, SiPython } from "react-icons/si";
import { useEffect, useState } from "react";

function PowerBIIcon() {
  return (
    <svg
      className="w-8 h-8 text-yellow-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M3 3h3v18H3V3zm5 6h3v12H8V9zm5-6h3v18h-3V3zm5 9h3v9h-3v-9z" />
    </svg>
  );
}

function TechStack() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-[#E34F26]" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-[#F7DF1E]" /> },
    { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
    { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
    { name: "Java", icon: <FaJava className="text-[#007396]" /> },
    { name: "Spring Boot", icon: <SiSpringboot className="text-[#6DB33F]" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
    { name: "SQL", icon: <FaDatabase className="text-[#003B57]" /> },
    { name: "Power BI", icon: <PowerBIIcon /> },
  ];

  const [visibleSkills, setVisibleSkills] = useState([]);

  useEffect(() => {
    skills.forEach((_, i) => {
      setTimeout(() => {
      }, i * 150);
    });
  }, []);

  return (
    <section className="max-w-screen-md mb-32 mx-auto p-8 bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-3xl shadow-xl mt-16">
      <h2 className="text-4xl font-extrabold mb-10 text-center text-blue-700 tracking-wide drop-shadow-lg">
        My Tech Stack
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 justify-items-center">
        {skills.map(({ name, icon }, index) => (
          <div
            key={name}
            className={`
              flex flex-col items-center space-y-3 p-6 rounded-2xl cursor-default
              bg-white bg-opacity-80 shadow-lg
              transform transition-transform duration-400
              border border-transparent
              ${visibleSkills.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              hover:scale-110 hover:shadow-2xl hover:border-blue-300
              hover:bg-gradient-to-br hover:from-blue-100 hover:to-blue-200
              hover:drop-shadow-[0_10px_20px_rgba(59,130,246,0.4)] 
              duration-300 ease-in-out
            `}
            style={{ transitionDelay: `${index * 150}ms` }}
            title={name}
          >
            <div
              className="text-6xl"
              style={{
                filter: "drop-shadow(0 0 5px rgba(0,0,0,0.15))",
                transition: "filter 0.3s ease-in-out",
              }}
            >
              {icon}
            </div>
            <span className="text-lg font-semibold text-blue-800 select-none tracking-wide">
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
