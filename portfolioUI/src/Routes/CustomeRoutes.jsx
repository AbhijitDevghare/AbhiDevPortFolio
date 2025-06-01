import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AboutPage from "../pages/About/AboutPage";
import Home from "../pages/Home/Home";
import ProjectPage from "../pages/Projects/Projects";
import BlogPage from "../pages/Blog/Blog";
import SkillsPage from "../pages/Skills/Skills";
import ContactPage from "../pages/Contact/Contact";

function CustomRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/contact" element={<ContactPage />} />

      </Routes>
    </Router>
  );
}

export default CustomRoutes;
