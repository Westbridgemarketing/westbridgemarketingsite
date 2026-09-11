import Link from "next/link";
import Wordmark from "./Wordmark";

const NAV = [
  { label: "Active Projects", href: "/projects" },
  { label: "Our Process", href: "/process" },
  { label: "Developer Services", href: "/services" },
  { label: "The Westbridge Report", href: "/report" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink pt-16 pb-10">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-b border-paper/15 pb-10">
          <div>
            <Wordmark form="full" tone="paper" size="md" />
            <p className="font-archivo font-light text-paper/55 text-sm mt-5 max-w-xs leading-relaxed">
              Pricing, positioning, and the sales program behind new
              developments across Metro Vancouver.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-10 gap-y-3">
            {NAV.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-archivo text-[11px] uppercase tracking-caps text-paper/65 hover:text-paper transition-colors duration-300 ease-premium"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pt-8">
          <p className="font-archivo font-light text-paper/40 text-[11px] leading-relaxed max-w-xl">
            Every Westbridge mandate runs alongside the project&rsquo;s
            developer, listing brokerage, and legal team.
          </p>
          <p className="font-archivo font-light text-paper/40 text-[11px]">
            © {new Date().getFullYear()} Westbridge Marketing.
          </p>
        </div>
      </div>
    </footer>
  );
}
