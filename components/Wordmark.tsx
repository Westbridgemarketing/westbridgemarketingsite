// The three approved forms of the Westbridge name, per the brand guide.
//   full    — the legal/corporate form. Footer, contracts, anything naming
//             the company as an entity.
//   service — the introduction. Stacked lockup for a first-time reader who
//             doesn't yet know what we do (site hero, pitch covers).
//   short   — the working signature. Default everywhere the context already
//             explains us (header nav, signage, social, project locks).
//
// tone "ink" sets dark text for light grounds; "paper" reverses it for the
// ink ground.

type Form = "full" | "service" | "short";
type Tone = "ink" | "paper";

const NAME_SIZE: Record<string, string> = {
  sm: "text-xl md:text-2xl",
  md: "text-3xl md:text-4xl",
  lg: "text-5xl md:text-6xl",
  xl: "text-6xl md:text-8xl",
};

const DESC_SIZE: Record<string, string> = {
  sm: "text-[8px]",
  md: "text-[10px]",
  lg: "text-xs",
  xl: "text-sm",
};

export default function Wordmark({
  form = "short",
  tone = "ink",
  size = "md",
  className = "",
}: {
  form?: Form;
  tone?: Tone;
  size?: keyof typeof NAME_SIZE;
  className?: string;
}) {
  const nameColor = tone === "ink" ? "text-ink" : "text-paper";
  const descColor = tone === "ink" ? "text-slate" : "text-paper/60";
  const ruleColor = tone === "ink" ? "bg-ink/25" : "bg-paper/30";

  const name = (
    <span
      className={`font-grotesk font-medium tracking-[-0.03em] ${nameColor} ${NAME_SIZE[size]}`}
    >
      Westbridge
    </span>
  );

  const desc = (label: string) => (
    <span
      className={`font-archivo uppercase tracking-capswide ${descColor} ${DESC_SIZE[size]}`}
    >
      {label}
    </span>
  );

  if (form === "full") {
    return (
      <span className={`inline-flex items-center gap-3 ${className}`}>
        {name}
        <span className={`h-[0.85em] w-px ${ruleColor}`} />
        {desc("Marketing")}
      </span>
    );
  }

  if (form === "service") {
    const lineColor = tone === "ink" ? "bg-fern" : "bg-fern-light";
    return (
      <span className={`inline-flex flex-col gap-3 ${className}`}>
        {name}
        <span className="inline-flex items-center gap-3">
          <span className={`h-px w-9 ${lineColor}`} />
          {desc("Project Marketing")}
        </span>
      </span>
    );
  }

  return <span className={className}>{name}</span>;
}
