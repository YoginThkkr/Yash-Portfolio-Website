import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { usePortfolio } from "../hooks/usePortfolio";
import SocialLinks from "./SocialLinks";

export default function HeroSection() {
  const { profile } = usePortfolio();

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_20%,rgba(187,204,215,0.08),transparent_60%)]"
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col items-center text-center"
      >
        <div
          className="mb-8 h-28 w-28 md:h-32 md:w-32"
          dangerouslySetInnerHTML={{ __html: profile.avatarSvg }}
        />

        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-gray-500">
          {profile.role} &middot; {profile.specialization}
        </p>

        <h1 className="hero-heading font-sans text-5xl font-semibold leading-[1.05] sm:text-6xl md:text-7xl">
          Hi, I&rsquo;m {profile.shortName}
        </h1>

        <p className="prose-copy mt-6 max-w-xl text-base text-gray-400 sm:text-lg">
          {profile.tagline}
        </p>

        <p className="mt-2 text-sm text-gray-500">
          {profile.location} &middot; {profile.yearsOfExperience}+ years in fashion design
        </p>

        <div className="mt-8">
          <SocialLinks social={profile.social} variant="pill" />
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="accent-gradient rounded-full px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.03]"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-line px-6 py-3 text-sm font-medium text-gray-200 transition-colors hover:border-gray-500"
          >
            Get in touch
          </a>
        </div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 text-gray-600 transition-colors hover:text-gray-300"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
