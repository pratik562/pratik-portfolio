import { motion } from "framer-motion"

const projects = [
  {
    name: "Plumm – Mental Health Services",
    android: "https://play.google.com/store/apps/details?id=com.plumm",
    ios: "https://apps.apple.com/in/app/plumm/id1604618955",
  },
  {
    name: "Prestartr – Equipment Rental (Australia)",
    android: "https://play.google.com/store/apps/details?id=com.prestartr",
    ios: "https://apps.apple.com/in/app/prestartr/id1670074522",
  },
  {
    name: "Kindlife – Beauty E-commerce",
    android: "https://play.google.com/store/apps/details?id=com.kindlife",
    ios: "https://apps.apple.com/in/app/kindlife/id1558677327",
  },
  {
    name: "Gokada – Food Delivery (Nigeria)",
    android: "https://play.google.com/store/apps/details?id=ng.gokada.superapp_client",
    ios:"https://apps.apple.com/us/app/gokada-superapp/id1560095848"
  },
  {
    name: "Loveln – Dating Application",
    android: "https://play.google.com/store/apps/details?id=loveln.dating.apps.free",
    ios: "https://apps.apple.com/us/app/loveln-dating-app-chat-meet/id6449701901",
  },
  {
    name: "DU Telecom – Dubai Telecom Services",
    android: "https://play.google.com/store/apps/details?id=duleaf.duapp.splash&hl=en_IN",
    ios: "https://apps.apple.com/ae/app/du/id521545878",
  },
  {
    name: "Ratnakala – Diamond Manufacturing",
    android: "https://play.google.com/store/apps/details?id=com.ratnakala",
    ios: "https://apps.apple.com/us/app/ratnakala-exports/id1543716358",
  },
  {
    name: "Paladiya Brothers – Diamond Factory",
    android: "https://play.google.com/store/apps/details?id=peacocktech.in.paladiyadiamonds",
    ios: "https://apps.apple.com/in/app/paladiya-brothers-co/id6469695413",
  },
  {
    name: "GemEntry",
    android: "https://play.google.com/store/apps/details?id=com.gementry&hl=en",
  },
  {
    name: "ZomoFit – Fitness Application",
    android: "https://apkpure.net/zomo-fit-fitness-creator-app/com.zomo_fit/download",
  },

]

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 px-6 md:px-20 overflow-hidden bg-black"
    >
      {/* 🔥 Animated Background Graphics */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ x: [0, 200, 0], y: [0, 100, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-10 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -150, 0], y: [0, -100, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
        />
      </div>

      {/* TITLE */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 text-blue-400">
        Live Mobile Applications
      </h2>

      {/* PROJECT GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-2xl p-6 shadow-xl hover:scale-105 transition"
          >
            <h3 className="text-lg font-semibold mb-4 text-white">
              {p.name}
            </h3>

            <div className="flex gap-4 flex-wrap">
              {p.android && (
                <a
                  href={p.android}
                  target="_blank"
                  className="px-4 py-2 rounded-lg text-sm font-medium bg-green-600 hover:bg-green-700 text-white shadow"
                >
                  Android
                </a>
              )}

              {p.ios && (
                <a
                  href={p.ios}
                  target="_blank"
                  className="px-4 py-2 rounded-lg text-sm font-medium bg-sky-500 hover:bg-sky-600 text-white shadow"
                >
                  iOS
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}