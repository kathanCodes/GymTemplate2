export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-12 sm:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
        <span className="font-black tracking-tighter text-2xl text-white">
          PHIVE
        </span>
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm uppercase tracking-widest text-white/40">
          <span>Porto</span>
          <span>Lisbon</span>
          <span>Coimbra</span>
        </div>
        <span className="text-xs text-white/30">
          © {new Date().getFullYear()} Phive Club. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
