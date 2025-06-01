import React from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const blogs = [
  {
    title: "Mastering the MERN Stack",
    date: "May 20, 2025",
    summary:
      "Explore how to build powerful web applications using MongoDB, Express, React, and Node.js. Step-by-step guide with real-world tips.",
    tags: ["MERN", "Full Stack", "JavaScript"],
    link: "https://yourblogdomain.com/mern-stack-guide"
  },
  {
    title: "Why Git is Essential for Every Developer",
    date: "April 10, 2025",
    summary:
      "Understand the importance of Git in collaborative development, with examples of commits, branches, and merge conflicts.",
    tags: ["Git", "Version Control", "Open Source"],
    link: "https://yourblogdomain.com/why-use-git"
  },
  {
    title: "Building Responsive Layouts with Tailwind CSS",
    date: "March 28, 2025",
    summary:
      "Tailwind CSS simplifies responsive design. Learn how to create adaptive layouts for all screen sizes.",
    tags: ["Tailwind", "CSS", "Frontend"],
    link: "https://yourblogdomain.com/tailwind-responsive-layouts"
  },
  {
    title: "The Basics of REST APIs",
    date: "February 15, 2025",
    summary:
      "A beginner-friendly introduction to REST APIs and how they help in frontend-backend communication.",
    tags: ["API", "REST", "Backend"],
    link: "https://yourblogdomain.com/basics-of-rest-api"
  }
];

export default function BlogPage() {
  return (
    <>
        <Header/>

    <section className="max-w-6xl mx-auto px-6 py-20 mt-5">
      <motion.h2
        className="text-5xl font-bold text-center text-indigo-900 mb-16 drop-shadow"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        📚 My Blog Posts
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        {blogs.map((blog, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-3xl shadow-md hover:shadow-xl p-6 transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-indigo-800 mb-2">
              {blog.title}
            </h3>
            <p className="text-gray-500 text-sm mb-3">{blog.date}</p>
            <p className="text-gray-700 mb-4">{blog.summary}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {blog.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <a
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline font-medium"
            >
              Read Full Article →
            </a>
          </motion.div>
        ))}
      </div>
    </section>

    <Footer/>
    </>
   
  );
}
