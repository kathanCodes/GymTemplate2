import { motion } from "framer-motion";
import { Calendar, Dumbbell, TrendingUp } from "lucide-react";

const APP_FEATURES = [
  { icon: Calendar, label: "Schedule classes in seconds" },
  { icon: Dumbbell, label: "Access personal training plans" },
  { icon: TrendingUp, label: "Track progress club to club" },
];

export default function AppSection() {
  return (
    <section id="app" className="overflow-hidden bg-[#111111] px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 sm:flex-row sm:gap-12">
        {/* Left: copy */}
        <div className="w-full sm:w-1/2">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-black uppercase leading-[0.95] tracking-tighter text-white text-5xl sm:text-6xl"
          >
            The Phive
            <br />
            App.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="mt-6 max-w-md text-base text-white/60 sm:text-lg"
          >
            Schedule classes, access training plans, and manage your
            membership — everything runs from your pocket.
          </motion.p>

          <div className="mt-10 space-y-5">
            {APP_FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.25 + i * 0.1, ease: "easeOut" }}
                  className="flex items-center gap-4"
                >
                  <Icon className="h-5 w-5 text-[#CCFF00]" strokeWidth={1.5} />
                  <span className="text-white/80">{f.label}</span>
                </motion.div>
              );
            })}
          </div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="mt-10 rounded-full bg-[#CCFF00] px-8 py-4 text-sm font-bold uppercase tracking-widest text-black transition-transform hover:scale-105"
          >
            Download the App
          </motion.button>
        </div>

        {/* Right: floating phone mockup */}
        <div className="flex w-full justify-center sm:w-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-[520px] w-[260px] rounded-[2.5rem] border-[6px] border-white/10 bg-black p-3 shadow-2xl shadow-black/60 sm:h-[580px] sm:w-[290px]"
            >
              {/* Notch */}
              <div className="absolute left-1/2 top-3 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
              {/* Screen placeholder */}
              <div className="flex h-full w-full flex-col items-center justify-center rounded-[2rem] bg-gradient-to-b from-[#1a1a1a] to-black">
                <span className="font-black uppercase tracking-tighter text-white text-3xl">
                  PHIVE
                </span>
                <span className="mt-2 text-xs uppercase tracking-widest text-white/40">
                  Your club, your schedule
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
