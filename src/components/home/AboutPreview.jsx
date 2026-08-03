import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

import Container from "../common/Container";
import Button from "../common/Button";
import SectionTitle from "../common/SectionTitle";

import aboutImage from "../../assets/images/about.png";

const features = [
  "Personalized Birth Chart Analysis",
  "Love & Relationship Guidance",
  "Career & Finance Insights",
  "Spiritual Growth & Life Purpose",
];

function AboutPreview() {
  return (
    <section className="bg-[#F8F6F2] py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={aboutImage}
              alt="About Crystal Blissed"
              className="rounded-[32px] shadow-2xl"
            />

            <div className="absolute bottom-6 left-6 rounded-3xl bg-white p-6 shadow-xl">
              <h3 className="text-4xl font-bold text-amber-700">
                10+
              </h3>

              <p className="text-sm text-zinc-600">
                Years Experience
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionTitle
              subtitle="About Crystal Blissed"
              title="Guiding Your Journey Through the Stars"
            />

            <p className="mb-8 text-lg leading-8 text-zinc-600">
              At Crystal Blissed, astrology is more than predicting the
              future—it's about helping you understand yourself, embrace
              your strengths, and make confident decisions in every area
              of life.
            </p>

            <div className="space-y-5 mb-10">
              {features.map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <CheckCircle2
                    className="text-amber-600"
                    size={24}
                  />

                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Button to="/about">
              Learn More
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default AboutPreview;