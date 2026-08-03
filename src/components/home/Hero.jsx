import { motion } from "framer-motion";
import heroImage from "../../assets/images/hero.png";

import Container from "../common/Container";
import Button from "../common/Button";
import FloatingStars from "./FloatingStars";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F8F6F2]">

      <FloatingStars />

      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-amber-100 blur-[120px] opacity-60" />

      <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-orange-100 blur-[120px] opacity-60" />

      <Container className="grid min-h-[90vh] items-center gap-16 py-16 lg:grid-cols-2">

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="mb-4 uppercase tracking-[0.4em] text-amber-700">
            Crystal Blissed
          </p>

          <h1 className="mb-8 text-5xl font-light leading-none lg:text-7xl">
            Discover Your
            <br />
            Cosmic Story
          </h1>

          <p className="mb-10 max-w-xl text-lg leading-8 text-zinc-600">
            Personalized astrology made simple. Discover clarity in
            love, relationships, career, and your spiritual journey
            through expert guidance.
          </p>

          <div className="flex gap-5">
            <Button to="/booking">
              Book Session
            </Button>

            <Button
              to="/services"
              className="bg-transparent border border-black text-black hover:bg-black hover:text-white"
            >
              Explore
            </Button>
          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1 }}
          className="relative"
        >

          <div className="absolute -left-6 -top-6 h-full w-full rounded-[40px] border border-amber-300" />

          <img
            src={heroImage}
            alt="Crystal Blissed"
            className="relative rounded-[40px] shadow-2xl"
          />

        </motion.div>

      </Container>

    </section>
  );
}

export default Hero;