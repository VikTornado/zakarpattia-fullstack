/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        staggeredPulse: {
          "0%, 100%": { opacity: 1, transform: "scale(1)" },
          "50%": { opacity: 0.5, transform: "scale(1.1)" },
        },
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "pulse-delay-0": "staggeredPulse 2s ease-in-out infinite 0s",
        "pulse-delay-1": "staggeredPulse 2s ease-in-out infinite 0.2s",
        "pulse-delay-2": "staggeredPulse 2s ease-in-out infinite 0.4s",
        "pulse-delay-3": "staggeredPulse 2s ease-in-out infinite 0.6s",
        "pulse-delay-4": "staggeredPulse 2s ease-in-out infinite 0.8s",
        "pulse-delay-5": "staggeredPulse 2s ease-in-out infinite 1s",
        fadeIn: "fadeIn 1s ease-in-out both",
      },
    },
  },
  plugins: [],
};
