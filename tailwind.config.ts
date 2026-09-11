import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1B211F",
        paper: "#F3F4F1",
        sage: "#E7EAE5",
        fern: "#3E5F4A",
        "fern-light": "#8FB89B",
        slate: "#4A514B",
      },
      fontFamily: {
        grotesk: ["var(--font-grotesk)", "sans-serif"],
        archivo: ["var(--font-archivo)", "sans-serif"],
      },
      letterSpacing: {
        caps: "0.24em",
        capswide: "0.32em",
      },
      maxWidth: {
        content: "1200px",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
