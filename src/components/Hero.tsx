import { motion } from "framer-motion";
import profile from "../assets/profile.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black px-6 md:px-20 py-16 flex items-center overflow-hidden">
      {/* 🔮 BACKGROUND MOTION GRAPHICS */}
      <motion.div
        animate={{ x: [0, 200, 0], y: [0, 100, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-10 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -200, 0], y: [0, -100, 0] }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
      />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE - TEXT */}
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Pratik <span className="text-blue-500">Vaghasiya</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300"
          >
            Senior Software Engineer — Mobile & Web Expert
          </motion.h2>

          <p className="text-gray-400 leading-relaxed">
            Results-driven Senior Software Engineer with 6+ years of experience
            in building scalable mobile and web applications using React Native,
            React.js, Next.js, Firebase, and modern JavaScript frameworks.
            Experienced in working with international clients (UK, India,
            Australia, UAE) delivering production-ready solutions.
          </p>

          {/* INFO */}
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
            <div>📍 Open to Work (Worldwide)</div>
            <div>📱 +91 7600692107</div>
            <div>📧 pratikvaghasiya64@gmail.com</div>
            <div>💼 Freelance / Contract / Full Time</div>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 pt-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:opacity-90 transition text-white"
            >
              View Projects
            </a>

            {/* 👇 THIS GOES TO CONTACT/MAIL SECTION */}
            {/* 👇 THIS OPENS WHATSAPP */}
            <a
              href="https://wa.me/917600692107?text=Hi%20Pratik,%20I%20am%20interested%20in%20your%20development%20services."
              target="_blank"
              className="px-6 py-3 border border-purple-500 rounded-xl hover:bg-purple-600 transition"
            >
              Hire Me
            </a>
          </div>

          {/* SKILLS */}
          <div className="pt-6">
            <h3 className="text-lg font-semibold mb-3">Core Skills</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "React Native",
                "Next.js",
                "Firebase",
                "Tailwind CSS",
                "Redux",
                "REST APIs",
                "Git",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm bg-zinc-800/80 backdrop-blur rounded-full border border-zinc-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 blur-2xl opacity-40"></div>
            <img
              src={profile}
              alt="Pratik Vaghasiya"
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-purple-500 shadow-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
