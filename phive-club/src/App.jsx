import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Locations from "./components/Locations";
import Features from "./components/Features";
import Classes from "./components/Classes";
import AppSection from "./components/AppSection";
import Footer from "./components/Footer";

/**
 * SMOOTH SCROLL SETUP (recommended, not wired up here):
 * Install Lenis for the buttery inertia-scroll feel phive.pt uses:
 *
 *   npm install lenis
 *
 * Then wrap this app (e.g. in main.jsx) with:
 *
 *   import Lenis from "lenis";
 *   import { useEffect } from "react";
 *
 *   function useLenis() {
 *     useEffect(() => {
 *       const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
 *       function raf(time) {
 *         lenis.raf(time);
 *         requestAnimationFrame(raf);
 *       }
 *       requestAnimationFrame(raf);
 *       return () => lenis.destroy();
 *     }, []);
 *   }
 *
 * Call useLenis() once at the top of App (or in main.jsx before render).
 * Framer Motion's whileInView triggers still work fine alongside Lenis.
 */

export default function App() {
  return (
    <div className="bg-black font-sans antialiased">
      <Hero />
      <Marquee />
      <Locations />
      <Features />
      <Classes />
      <AppSection />
      <Footer />
    </div>
  );
}
