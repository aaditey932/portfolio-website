import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center px-6 sm:px-10 lg:px-16 pt-24 pb-16">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16 xl:gap-20">
        {/* Left column — text content (Poppins for headline match) */}
        <div className="max-w-4xl flex-shrink-0 font-poppins">
          {/* Greeting — Futura No. 2 Std style, bright cyan, slightly larger */}
          <p className="font-futura text-lg sm:text-xl text-cyan-300 font-medium mb-4 sm:mb-6 tracking-tight">
            Hello! I&apos;m Aaditey
          </p>

          {/* Headline — Gotham Bold, stacked, vertical gradient */}
          <div
            className="font-gotham flex flex-col leading-[0.85] tracking-tight mb-5 sm:mb-6 font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl bg-[linear-gradient(to_bottom,white_0%,white_52%,rgb(107_114_128)_100%)] bg-clip-text text-transparent"
          >
            <span>AI</span>
            <span>ENGINEER</span>
          </div>

          {/* Supporting paragraph — Nunito */}
          <p className="font-nunito text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed mb-10 sm:mb-12">
            I build intelligent systems, chatbots, and modern web applications.
            Bridging the gap between complex AI logic and beautiful user
            interfaces.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black"
            >
              Hire Me
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#projects"
              className="inline-flex items-center rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10 hover:border-white/35 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-black"
            >
              View Work
            </a>
          </div>
        </div>

        {/* Right column — laptop / code image */}
        <div className="flex-shrink-0 lg:w-[55%] xl:w-[52%] flex items-center justify-center">
          <div className="relative w-full max-w-[40rem] xl:max-w-[46rem] aspect-square rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl shadow-black/50 ring-1 ring-white/10">
            <Image
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&fm=jpg&q=60&w=3000"
              alt="Laptop displaying code in a dark-themed editor"
              fill
              className="object-cover grayscale"
              sizes="(max-width: 1024px) 100vw, 55vw"
              priority
            />
            {/* Subtle cinematic gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
