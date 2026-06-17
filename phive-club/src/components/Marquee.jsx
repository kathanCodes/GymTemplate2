import { motion } from "framer-motion";

const TICKER_TEXT = "TRAIN EVERY DAY";
const SEPARATOR = "•";

export default function Marquee() {
  // Duplicate content so the loop seam is invisible — track moves exactly
  // -50% (half its total width, since content is doubled) then resets.
  const segment = (
    <div className="flex shrink-0 items-center gap-6 sm:gap-10">
      {Array.from({ length: 6 }).map((_, i) => (
        <span
          key={i}
          className="flex items-center gap-6 font-black uppercase tracking-tighter text-white sm:gap-10"
        >
          <span className="text-[8vw] leading-none sm:text-[5vw] lg:text-[4vw]">
            {TICKER_TEXT}
          </span>
          <span className="text-[6vw] text-[#CCFF00] sm:text-[3.5vw] lg:text-[2.5vw]">
            {SEPARATOR}
          </span>
          <span className="text-[8vw] leading-none sm:text-[5vw] lg:text-[4vw]">
            PUSH YOUR LIMITS
          </span>
          <span className="text-[6vw] text-[#CCFF00] sm:text-[3.5vw] lg:text-[2.5vw]">
            {SEPARATOR}
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <section className="w-full overflow-hidden border-y border-white/10 bg-black py-6 sm:py-8">
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {segment}
        {segment}
      </motion.div>
    </section>
  );
}
