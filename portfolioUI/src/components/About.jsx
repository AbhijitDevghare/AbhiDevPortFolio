import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaEnvelope,
  FaPython,
} from "react-icons/fa";
import { SiSpringboot, SiMongodb } from "react-icons/si";

import profileImg from "../assets/abhi3.jpeg"; // Your profile image
import Interests from "./Interests";

function About() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-[#F7DF1E]" /> },
    { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
    { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
    { name: "Java", icon: <FaJava className="text-[#007396]" /> },
    { name: "Spring Boot", icon: <SiSpringboot className="text-[#6DB33F]" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
    { name: "SQL", icon: <FaDatabase className="text-[#003B57]" /> },
  ];

  const [visibleSkills, setVisibleSkills] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    // Animate skills one by one
    skills.forEach((_, i) => {
      setTimeout(() => {
        setVisibleSkills((prev) => [...prev, i]);
      }, i * 150);
    });
  }, []);

  return (
    <main className="relative min-h-screen mt-5 bg-white text-blue-700 px-6 py-12 md:px-20 lg:px-32 overflow-hidden">
      {/* Floating Blobs Background */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden opacity-10 pointer-events-none">
        <div className="w-[600px] h-[600px] bg-blue-300 rounded-full absolute top-[-100px] left-[-100px] mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="w-[500px] h-[500px] bg-purple-300 rounded-full absolute bottom-[-100px] right-[-100px] mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Profile Image & Intro */}
     <section
  className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto my-24 px-6"
  data-aos="fade-right"
>
  <img
    src={profileImg}
    alt="Profile"
    className="w-56 h-56 rounded-full object-cover"
  />
  <div className="text-center md:text-left max-w-2xl">
    <h1 className="text-5xl font-extrabold mb-4">
      Hi, I'm{" "}
      <span className="text-indigo-600 font-bold">
        <Typewriter
          words={["Abhi 👋", "a Developer 💻", "a Tech Explorer 🚀"]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </span>
    </h1>
    <p className="text-gray-700 text-xl leading-relaxed">
      I build fast, responsive web apps using React, Node.js, Express, and MongoDB. Passionate about clean code and solving real problems.
    </p>
  </div>
</section>


      {/* Skills */}
      <section className="max-w-5xl mx-auto mb-20" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-800 drop-shadow-sm">
          Tech Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 justify-items-center">
          {skills.map(({ name, icon }, index) => (
            <div
              key={name}
              className={`flex flex-col items-center space-y-2 p-5 rounded-xl cursor-default
              bg-blue-50 shadow-md transition-transform duration-300 ease-in-out
              ${
                visibleSkills.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }
              hover:scale-110 hover:shadow-xl`}
              style={{ transitionDelay: `${index * 100}ms` }}
              title={name}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="text-5xl" aria-hidden="true">
                {icon}
              </div>
              <span className="text-base font-semibold text-blue-700 select-none">
                {name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="text-center mb-20" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">Quick Stats</h2>
        <div className="flex flex-wrap justify-center gap-10">
          {[
            { number: "2+", label: "Years of Learning" },
            { number: "10+", label: "Projects Completed" },
            { number: "1000+", label: "GitHub Contributions" },
          ].map(({ number, label }) => (
            <div
              key={label}
              className="bg-blue-100 px-6 py-4 rounded-xl shadow-md w-36"
            >
              <p className="text-4xl font-bold text-blue-900">{number}</p>
              <p className="text-blue-600">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto mb-20 text-left" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-6 text-blue-800 drop-shadow-sm text-center">
          My Journey
        </h2>
        <ul className="border-l-4 border-blue-500 pl-6 space-y-8">
          <li>
            <div className="text-blue-900 font-bold text-lg">2022</div>
            <div className="text-blue-700">
              Started BCA and learned basics of programming.
            </div>
          </li>
          <li>
            <div className="text-blue-900 font-bold text-lg">2023</div>
            <div className="text-blue-700">
               Joined MERN course.
               <br />
                Builded some amazing projects like E-Commerce,Basic Chat App, Pokemon React App , Todo App  and more.
            </div>
          </li>



          <li>
            <div className="text-blue-900 font-bold text-lg">2024</div>
            <div className="text-blue-700">
              Puruing MCA to  enhance my knowledge
            </div>
          </li>
        </ul>
      </section>

      <Interests/>

      

      {/* Values and Vision */}
      <section className="max-w-4xl mx-auto mb-20 text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-6 text-blue-800 drop-shadow-sm">
          What Drives Me
        </h2>
        <p className="text-blue-600 leading-relaxed max-w-3xl mx-auto">
          I believe in clean code, constant learning, and collaboration. I'm
          deeply passionate about software development and how it can impact
          the world. My mission is to become a well-rounded developer and build
          scalable, impactful systems with modern technologies.
        </p>
      </section>

      {/* Contact Callout */}
      <section
        className="max-w-3xl mx-auto text-center p-10 rounded-xl bg-gradient-to-r from-blue-100 to-blue-200 shadow-lg border border-blue-300"
        data-aos="fade-up"
      >
        <h3 className="text-2xl font-bold mb-4 text-blue-900">
          Let's Build Something Great Together!
        </h3>
        <p className="mb-6 text-blue-700">
          Want to collaborate or discuss an idea? I’m just an email away.
        </p>
        <a
          href="mailto:your.email@example.com"
          className="inline-flex items-center gap-2 px-6 py-3 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition"
          aria-label="Send email to Abhi"
        >
          <FaEnvelope /> Contact Me
        </a>
      </section>
    </main>
  );
}

export default About;
