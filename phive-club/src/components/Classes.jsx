import { motion } from "framer-motion";

const CLASSES = [
  {
    name: "Mobility",
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "Localizada",
    img: "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "Flow",
    img: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "Aqua",
    img: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=900&auto=format&fit=crop",
  },
];

function ClassCard({ cls, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative h-[420px] w-[300px] shrink-0 overflow-hidden rounded-sm sm:h-[480px] sm:w-[340px]"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url('${cls.img}')` }}
      />
      {/* Dark overlay that lifts on hover, revealing more of the image */}
      <div className="absolute inset-0 bg-black/55 transition-colors duration-500 group-hover:bg-black/25" />

      <div className="relative z-10 flex h-full flex-col justify-end p-7">
        <h3 className="font-black uppercase tracking-tighter text-white text-4xl">
          {cls.name}
        </h3>
      </div>
    </motion.div>
  );
}

export default function Classes() {
  return (
    <section id="classes" className="bg-black py-24 sm:py-32">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mb-12 px-6 font-black uppercase leading-[0.95] tracking-tighter text-white text-5xl sm:px-10 sm:mb-16 sm:text-6xl lg:text-7xl"
      >
        Find your class.
      </motion.h2>

      {/* Horizontal scroll row. Native overflow-x keeps this light and
          touch-friendly on mobile without extra scroll-hijacking libs. */}
      <div className="flex gap-5 overflow-x-auto px-6 pb-4 sm:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {CLASSES.map((cls, i) => (
          <ClassCard key={cls.name} cls={cls} index={i} />
        ))}
        {/* Spacer so the last card isn't flush against the viewport edge */}
        <div className="w-2 shrink-0 sm:w-6" />
      </div>
    </section>
  );
}
