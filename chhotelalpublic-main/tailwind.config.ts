import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      borderRadius: {
        lg: ".5625rem",
        md: ".375rem",
        sm: ".1875rem",
      },
      colors: {
        // Background & text
        background: "hsl(var(--background) / <alpha-value>)", // navy blue
        foreground: "hsl(var(--foreground) / <alpha-value>)", // white/cream

        // Buttons & accents
        primary: "hsl(var(--primary) / <alpha-value>)", // gold/amber for Begin Your Journey
        "primary-foreground": "hsl(var(--primary-foreground) / <alpha-value>)", // text on gold button (probably dark/navy)
        secondary: "hsl(var(--secondary) / <alpha-value>)", // dark button like "Explore Programs"
        "secondary-foreground": "hsl(var(--secondary-foreground) / <alpha-value>)",

        accent: "hsl(var(--accent) / <alpha-value>)", // for highlights like scroll bar / badges
        "accent-foreground": "hsl(var(--accent-foreground) / <alpha-value>)",

        destructive: "hsl(var(--destructive) / <alpha-value>)", // red or error
        "destructive-foreground": "hsl(var(--destructive-foreground) / <alpha-value>)",

        muted: "hsl(var(--muted) / <alpha-value>)", // secondary text
        "muted-foreground": "hsl(var(--muted-foreground) / <alpha-value>)",

        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
      },
      fontFamily: {
        sans: "var(--font-sans)",
        display: "var(--font-display)",
      },
    },
  },

  plugins: [animate, typography],
} satisfies Config;