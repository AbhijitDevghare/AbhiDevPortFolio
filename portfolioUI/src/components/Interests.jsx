import React from "react";

import musicImg from "../assets/arijit_singh2.jpg";
import footballImg from "../assets/football_action.avif";
import viratImg from "../assets/virat_kohli.jpg";
import krishnaImg from "../assets/krishna.jpg";

export default function Interests() {
  return (
    <section
      className="max-w-7xl mx-auto mb-20 p-10 rounded-3xl"
      data-aos="fade-up"
      style={{ backgroundColor: "transparent" }}
    >
      <h2 className="text-5xl font-extrabold mb-14 text-blue-900 text-center drop-shadow-md tracking-wide">
        My Interests & Hobbies: What I Love and What I Believe
      </h2>

      <div className="space-y-20">
        <h3 className="text-4xl font-bold mb-10 text-blue-800 text-center">
          What I Love ❤️
        </h3>

        <div className="flex flex-col md:flex-row items-center gap-10 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img
            src={musicImg}
            alt="Arijit Singh"
            className="w-full md:w-96 max-h-72 object-contain rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
          <div className="md:max-w-xl text-blue-800 px-4">
            <h4 className="text-3xl font-semibold mb-4">Music 🎶</h4>
            <p className="leading-relaxed text-lg">
              I am a huge fan of music, especially the soulful voice of Arijit Singh.
              His songs inspire me deeply and help me stay motivated during coding
              sessions. Music for me is not just entertainment, it’s a source of comfort,
              creativity, and emotional expression.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-10 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img
            src={footballImg}
            alt="Playing Football"
            className="w-full md:w-96 max-h-72 object-contain rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
          <div className="md:max-w-xl text-blue-800 px-4">
            <h4 className="text-3xl font-semibold mb-4">Football ⚽</h4>
            <p className="leading-relaxed text-lg">
              Football is more than a game for me — it taught me teamwork, discipline,
              and persistence. The thrill of chasing the ball and scoring a goal
              energizes me, and it’s a great way to stay fit and make friends.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img
            src={viratImg}
            alt="Virat Kohli"
            className="w-full md:w-96 max-h-72 object-contain rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
          <div className="md:max-w-xl text-blue-800 px-4">
            <h4 className="text-3xl font-semibold mb-4">Virat Kohli 🏏</h4>
            <p className="leading-relaxed text-lg">
              I became a huge fan of Virat Kohli when I watched his amazing performance
              in IPL 2016. His passion, dedication, and aggressive style of play inspired
              me a lot. Kohli's leadership on the field and his consistency made me admire
              cricket more deeply and taught me the importance of focus and hard work.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-24 space-y-10">
        <h3 className="text-4xl font-bold mb-8 text-blue-800 text-center">
          My Beliefs & Spirituality 🙏
        </h3>
        <div className="flex flex-col md:flex-row items-center gap-10 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img
            src={krishnaImg}
            alt="Lord Krishna"
            className="w-full md:w-96 max-h-72 object-contain rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
          <div className="md:max-w-xl text-blue-800 px-4 text-lg leading-relaxed">
            <p className="mb-5">
              I believe in God, especially Lord Krishna, whose teachings inspire me to
              live a life of righteousness, courage, and compassion. My spirituality
              grounds me and gives me strength to overcome challenges in both life and
              coding.
            </p>
            <p>
              Religion to me is about love, self-improvement, and serving others. I strive
              to apply these values in my daily life and work.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-24 p-10 rounded-xl shadow-lg max-w-4xl mx-auto text-center text-blue-800 leading-relaxed text-lg">
        <h3 className="text-4xl font-bold mb-6">What I Don’t Like ❌</h3>
        <p className="mb-6">
          While I embrace many interests, I dislike negativity and close-mindedness.
          I believe every person should keep an open heart and mind, especially when
          learning new things or meeting people from diverse backgrounds.
        </p>
        <p>
          Also, I’m not a fan of loud, distracting environments when I need to focus.
          Peace and quiet help me think deeply and code efficiently.
        </p>
      </div>
    </section>
  );
}
