import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

// Splits a line into words and wraps each in a masked container so the
// slide-up animation is clipped (no overflow bleed) — this is the
// signature "line reveal" effect used across phive.pt.
const MaskedLine = ({ text, delayStart }) => {
  const words = text.split(" ");
  return (
    <span className="flex flex-wrap justify-center overflow-hidden">
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden py-1 sm:py-2">
          <motion.span
            className="inline-block mr-[0.25em]"
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.9,
              delay: delayStart + i * 0.08,
              ease: [0.16, 1, 0.3, 1], // expo-out, signature "snap" feel
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background media placeholder. Swap this div's background-image
          for a <video autoPlay loop muted playsInline> in production. */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1920&auto=format&fit=crop')",
        }}
      />
      {/* Dark tint / gradient overlay so type stays legible on any image */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40" />

      {/* Top bar */}
      <div className="relative z-10 flex items-center justify-between px-6 pt-8 sm:px-10 sm:pt-10">
        <span className="font-black tracking-tighter text-xl sm:text-2xl text-white">
          PHIVE
        </span>
        <nav className="hidden gap-8 text-sm uppercase tracking-widest text-white/80 sm:flex">
          <a href="#locations" className="hover:text-white transition-colors">
            Clubs
          </a>
          <a href="#classes" className="hover:text-white transition-colors">
            Classes
          </a>
          <a href="#app" className="hover:text-white transition-colors">
            App
          </a>
        </nav>
        <button className="rounded-full border border-white/30 px-5 py-2 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:border-[#CCFF00] hover:text-[#CCFF00]">
          Join Now
        </button>
      </div>

      {/* Headline */}
      <div className="relative z-10 flex h-[calc(100%-96px)] flex-col items-center justify-center px-4 text-center">
        <h1 className="font-black uppercase leading-[0.95] tracking-tighter text-white text-[12vw] sm:text-[9vw] lg:text-[7.5vw]">
          <MaskedLine text="NOT JUST FITNESS." delayStart={0.2} />
          <MaskedLine text="IT'S LIVING FULLY." delayStart={0.5} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
          className="mt-6 max-w-md text-sm uppercase tracking-[0.2em] text-white/60 sm:text-base"
        >
          Porto · Lisbon · Coimbra
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6 text-white/70" strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
}
