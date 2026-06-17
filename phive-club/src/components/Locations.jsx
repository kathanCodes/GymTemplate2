import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const LOCATIONS = [
  {
    name: "Porto",
    tag: "Flagship",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
    span: "sm:col-span-2 sm:row-span-2",
    height: "h-[420px] sm:h-full",
  },
  {
    name: "Lisbon",
    tag: "Riverside",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
    span: "sm:col-span-1",
    height: "h-[280px] sm:h-full",
  },
  {
    name: "Coimbra",
    tag: "Heritage",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop",
    span: "sm:col-span-1",
    height: "h-[280px] sm:h-full",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

function LocationCard({ location, index }) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative overflow-hidden rounded-sm bg-[#111111] ${location.span} ${location.height}`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] ease-out group-hover:scale-110"
        style={{ backgroundImage: `url('${location.img}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

      <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-8">
        <div className="flex items-start justify-between">
          <span className="rounded-full border border-white/30 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
            {location.tag}
          </span>
          <ArrowUpRight
            className="h-6 w-6 text-white opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
            strokeWidth={1.5}
          />
        </div>
        <h3 className="font-black uppercase tracking-tighter text-white text-4xl sm:text-5xl">
          {location.name}
        </h3>
      </div>
    </motion.div>
  );
}

export default function Locations() {
  return (
    <section id="locations" className="bg-black px-6 py-24 sm:px-10 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mb-12 flex flex-col items-start justify-between gap-4 sm:mb-16 sm:flex-row sm:items-end"
      >
        <h2 className="font-black uppercase leading-[0.95] tracking-tighter text-white text-5xl sm:text-6xl lg:text-7xl">
          Our
          <br />
          Clubs.
        </h2>
        <p className="max-w-xs text-sm text-white/50 sm:text-right">
          Three cities. One standard. Every club built for the same uncompromising experience.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:grid-rows-2 sm:gap-5 sm:[height:640px]">
        {LOCATIONS.map((loc, i) => (
          <LocationCard key={loc.name} location={loc} index={i} />
        ))}
      </div>
    </section>
  );
}
