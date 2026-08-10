import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

import Container from "../common/Container";

function ContactInfo() {
  return (
    <section className="bg-[#F5F3EF] py-24">
      <Container>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          
          <div className="rounded-[28px] bg-white p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
              <Mail size={20} />
            </div>

            <h3 className="mt-6 text-xl font-medium">
              Email
            </h3>

            <p className="mt-3 text-sm text-zinc-500">
              Send us an email anytime.
            </p>

            <a
              href="mailto:hello@crysblissed.com"
              className="mt-4 block text-sm font-medium hover:underline"
            >
              hello@crysblissed.com
            </a>
          </div>

          <div className="rounded-[28px] bg-white p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
              <Phone size={20} />
            </div>

            <h3 className="mt-6 text-xl font-medium">
              Phone
            </h3>

            <p className="mt-3 text-sm text-zinc-500">
              Speak directly with our team.
            </p>

            <a
              href="tel:+919999999999"
              className="mt-4 block text-sm font-medium hover:underline"
            >
              +91 99999 99999
            </a>
          </div>

          <div className="rounded-[28px] bg-white p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
              <MapPin size={20} />
            </div>

            <h3 className="mt-6 text-xl font-medium">
              Location
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-500">
              Online consultations available worldwide.
            </p>

            <p className="mt-4 text-sm font-medium">
              India
            </p>
          </div>

          <div className="rounded-[28px] bg-white p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
              <Clock size={20} />
            </div>

            <h3 className="mt-6 text-xl font-medium">
              Hours
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-500">
              Monday – Saturday
              <br />
              10:00 AM – 7:00 PM
            </p>
          </div>

        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
  <a
    href="#"
    aria-label="Instagram"
    className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 text-sm font-medium transition hover:bg-black hover:text-white"
  >
    IG
  </a>
</div>
      </Container>
    </section>
  );
}

export default ContactInfo;