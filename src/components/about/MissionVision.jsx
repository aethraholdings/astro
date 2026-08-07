import { Compass, Eye } from "lucide-react";
import Container from "../common/Container";

function MissionVision() {
  return (
    <section className="bg-[#F8F6F2] py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Mission */}
          <div className="rounded-[32px] bg-white p-10 shadow-lg">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
              <Compass className="text-amber-700" size={30} />
            </div>

            <h2 className="mb-5 text-3xl font-semibold">
              Our Mission
            </h2>

            <p className="leading-8 text-zinc-600">
              To empower people through authentic astrology,
              helping them gain clarity in relationships,
              career, finances, and personal growth.
            </p>
          </div>

          {/* Vision */}
          <div className="rounded-[32px] bg-white p-10 shadow-lg">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
              <Eye className="text-amber-700" size={30} />
            </div>

            <h2 className="mb-5 text-3xl font-semibold">
              Our Vision
            </h2>

            <p className="leading-8 text-zinc-600">
              To become one of the world's most trusted
              astrology platforms by blending ancient
              wisdom with modern technology and
              exceptional client care.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default MissionVision;