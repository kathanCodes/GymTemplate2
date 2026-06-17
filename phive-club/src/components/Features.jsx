import { motion } from "framer-motion";
import { Waves, Flame, Dumbbell, Users } from "lucide-react";

const AMENITIES = [
  {
    icon: Waves,
    title: "Heated Indoor Pool",
    desc: "25m lanes, year-round, sub-zero outside or not.",
  },
  {
    icon: Flame,
    title: "Sauna & Turkish Bath",
    desc: "Recovery built into every membership tier.",
  },
  {
    icon: Dumbbell,
    title: "Weights & Cardio",
    desc: "Free weights, machines, and a track that doesn't loop in circles.",
  },
  {
    icon: Users,
    title: "Private Pilates",
    desc: "One-on-one or small group, reformer and mat.",
  },
];

export default function Features() {
  return (
    <section className="bg-[#111111] px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 sm:flex-row sm:gap-16">
        {/* Sticky heading column */}
        <div className="sm:w-2/5">
          <div className="sm:sticky sm:top-32">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="font-black uppercase leading-[0.95] tracking-tighter text-white text-5xl sm:text-6xl"
            >
              What you'll
              <br />
              find in our
              <br />
              clubs.
            </motion.h2>
          </div>
        </div>

        {/* Scrolling amenities list */}
        <div className="sm:w-3/5">
          {AMENITIES.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="flex items-center gap-5 border-b border-white/10 py-7 sm:py-8"
              >
                <Icon
                  className="h-7 w-7 shrink-0 text-[#CCFF00]"
                  strokeWidth={1.5}
                />
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/50">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
