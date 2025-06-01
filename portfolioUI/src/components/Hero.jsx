import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import heroImage from "../assets/abhi.jpeg";
import "./Hero.css"; // Import the CSS for animations

function Hero() {
  return (
    <div
      className="w-full pt-[150px] pb-48 px-5 md:px-20 bg-slate-100 flex flex-col md:flex-row items-center justify-center gap-10"
    >
      {/* Text Section */}
      <div className="max-w-2xl text-center md:text-left text-section">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-blue-700">
          Hi, I'm Abhijit Devghare
        </h1>

        <h2 className="text-3xl md:text-4xl mb-6 text-gray-700 font-semibold">
          Full Stack Web Developer
        </h2>

        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          I build fast, responsive, and scalable web apps using React, Node.js, Express, MongoDB, and Spring Boot.  
          I’m passionate about clean code, smooth user experiences, and learning new technologies.  
          Let’s create something amazing together!
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 text-blue-500 text-3xl mb-6 justify-center md:justify-start social-icons">
          <a
            href="https://linkedin.com/in/abhijit-devghare-b54b2031b"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition-transform transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/AbhijitDevghare"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800 transition-transform transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/AbhijitDev3592"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-transform transform hover:scale-110"
          >
            <FaTwitter />
          </a>
        </div>

        <a
          href="/resume.pdf"
          download
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full font-semibold shadow-md transition-transform transform hover:scale-105 resume-button"
        >
          Download Resume
        </a>
      </div>

      {/* Image Section */}
      <div className="image-section">
        <img
          src={heroImage}
          alt="Abhijit Devghare"
          className="rounded-full w-80 h-80 object-cover shadow-lg border-4 border-blue-300 transition-transform duration-500 hover:scale-110"
        />
      </div>
    </div>
  );
}

export default Hero;
