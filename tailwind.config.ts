import type { Config } from "tailwindcss";
import scrollbarHide from "tailwind-scrollbar-hide";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        "37.5": "150px",
        "77.5": "310px",
      },
    },
  },
  plugins: [scrollbarHide],
};

export default config;
