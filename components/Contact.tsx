import Reveal from "./Reveal";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-14">
        <div className="md:col-span-5">
          <Reveal>
            <p className="eyebrow mb-4">Contact</p>
            <h1 className="font-grotesk font-medium text-ink text-[32px] md:text-[44px] leading-[1.08] tracking-[-0.03em]">
              Have a project coming up?
            </h1>
            <p className="font-archivo font-light text-slate text-[16px] leading-[1.8] mt-6 max-w-sm">
              Tell us where it stands, and we&rsquo;ll get back to you. If
              it&rsquo;s still early, that&rsquo;s the right time to talk,
              not too soon.
            </p>

            <div className="mt-10 border-t border-ink/10 pt-8 space-y-4">
              <div>
                <p className="font-archivo text-[10px] uppercase tracking-caps text-slate/60">
                  Email
                </p>
                <a
                  href="mailto:info@westbridgemarketing.ca"
                  className="font-grotesk text-ink text-lg hover:text-fern transition-colors duration-300 ease-premium"
                >
                  info@westbridgemarketing.ca
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-7">
          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
