import Container from "../common/Container";
import Button from "../common/Button";
import astrologer from "../../assets/images/astrologer.jpg";

function MeetAstrologer() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <div>
            <img
              src={astrologer}
              alt="Founder"
              className="rounded-[40px] shadow-2xl"
            />
          </div>

          <div>
            <p className="uppercase tracking-[0.3em] text-amber-600">
              Meet Your Guide
            </p>

            <h2 className="mt-4 text-5xl font-light">
              Your Trusted
              <br />
              Astrology Expert
            </h2>

            <h3 className="mt-8 text-2xl font-semibold">
              Dr. **** ****
            </h3>

            <p className="mt-6 leading-8 text-zinc-600">
              With over a decade of experience in Vedic
              Astrology, Tarot, Numerology, and Spiritual
              Counseling, Dr. Aarya has helped thousands of
              clients discover clarity, confidence, and purpose.
            </p>

            <div className="mt-10 space-y-4">
              <div>✓ 10+ Years Experience</div>
              <div>✓ Certified Vedic Astrologer</div>
              <div>✓ 5000+ Personal Consultations</div>
              <div>✓ International Clients</div>
            </div>

            <div className="mt-10">
              <Button to="/booking">
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default MeetAstrologer;