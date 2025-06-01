import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ContactPage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_fgi4jnp",   // Replace with your actual Service ID
      "template_peordrx",  // Replace with your actual Template ID
      form.current,
      "eNSqT6nmgAi4Db8Xm"    // Replace with your actual Public Key
    )
    .then((result) => {
      alert("Message sent successfully!");
      form.current.reset();
    })
    .catch((error) => {
      alert("Failed to send message. Please try again.");
      console.error(error);
    });
  };

  return (

        <>
            <Header/>
                                                                                                <section className="max-w-3xl mx-auto py-20 px-4 mt-10">
      <h2 className="text-4xl font-bold text-blue-900 mb-10 text-center">
        Contact Me 📩
      </h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-6">
        <div>
          <label className="block mb-1 text-gray-700">Your Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block mb-1 text-gray-700">Your Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block mb-1 text-gray-700">Your Message</label>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-md"
        >
          Send Message
        </button>
      </form>
    </section>
            <Footer/>
        </>
  );
}
