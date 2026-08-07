import { motion } from "framer-motion";
import Container from "../common/Container";
import storyImage from "../../assets/images/story.jpg";

function Story() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={storyImage}
              alt="Our Story"
              className="rounded-[32px] shadow-2xl"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="uppercase tracking-[0.3em] text-amber-600">
              Our Story
            </span>

            <h2 className="mt-4 text-4xl font-light leading-tight lg:text-5xl">
              Helping People Find
              <br />
              Clarity Through Astrology
            </h2>

            <p className="mt-8 leading-8 text-zinc-600">
              Crystal Blissed was founded with one simple mission:
              to make ancient astrological wisdom accessible in a modern,
              compassionate, and practical way.
            </p>

            <p className="mt-6 leading-8 text-zinc-600">
              We believe astrology is not about predicting every moment
              of your life—it is about understanding yourself, making
              informed decisions, and embracing opportunities with
              confidence.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-3xl font-bold text-amber-600">
                  5000+
                </h3>

                <p className="text-zinc-500">
                  Consultations
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-amber-600">
                  98%
                </h3>

                <p className="text-zinc-500">
                  Happy Clients
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default Story;