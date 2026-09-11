import Link from "next/link";
import Reveal from "./Reveal";

export default function ContactCTA() {
  return (
    <section id="contact" className="bg-ink py-28 md:py-36">
      <div className="max-w-content mx-auto px-6 md:px-10 text-center">
        <Reveal>
          <p className="eyebrow-onink mb-5">Get in Touch</p>
          <h2 className="font-grotesk font-medium text-paper text-[34px] md:text-[52px] leading-[1.05] tracking-[-0.03em] max-w-2xl mx-auto">
            Have a project coming up?
          </h2>
          <p className="font-archivo font-light text-paper/70 text-[16px] md:text-[17px] mt-6 max-w-md mx-auto leading-relaxed">
            Whether you&rsquo;re still at acquisition or already have a
            launch date, the earlier we talk the more room there is to get
            the pricing and positioning right.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn font-archivo text-[11px] uppercase tracking-caps bg-paper text-ink px-8 py-4 hover:bg-fern-light"
            >
              Start a Conversation
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
