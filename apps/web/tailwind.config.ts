import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./modules/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "base-black": "#111315",
        "stage-graphite": "#1D2226",
        "concrete-grey": "#6F7A82",
        "signal-amber": "#F5A623",
        "confirm-green": "#2ECC71",
        "alert-red": "#E74C3C",
        "info-blue": "#2D9CDB",
        "work-surface": "#F4F6F8"
      },
      boxShadow: {
        panel: "0 1px 2px rgba(17, 19, 21, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
