import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="
        bg-white text-blue-600
        py-6 px-4
        border-t border-gray-300
        shadow-md
        flex flex-col items-center gap-4
        z-10
      "
      style={{ boxShadow: 'inset 0 6px 6px -6px rgba(0, 0, 0, 0.1)' }} // subtle top inner shadow
    >
      <div className="max-w-screen-xl w-full mx-auto flex flex-col items-center gap-4">
        {/* Social Icons */}
        <div className="flex gap-8 text-3xl">
          {[
            {
              href: "https://github.com/AbhijitDevghare",
              label: "GitHub",
              icon: <FaGithub aria-hidden="true" />
            },
            {
              href: "https://linkedin.com/in/abhijit-devghare-b54b2031b",
              label: "LinkedIn",
              icon: <FaLinkedin aria-hidden="true" />
            },
            {
              href: "https://twitter.com/AbhijitDev3592",
              label: "Twitter",
              icon: <FaTwitter aria-hidden="true" />
            },
            {
              href: "mailto:kishordevghare6@gmail.com",
              label: "Email",
              icon: <FaEnvelope aria-hidden="true" />
            }
          ].map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-blue-600 hover:text-blue-800 transition duration-300 transform hover:scale-110 cursor-pointer"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm select-none text-gray-600">
          &copy; {new Date().getFullYear()} Devfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
