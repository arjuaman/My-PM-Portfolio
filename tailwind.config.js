/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "cp-yellow": "#FCEE0A", // Cyberpunk Yellow
        "cp-blue": "#00F0FF",   // Neon Blue
        "cp-pink": "#FF003C",   // Neon Pink
        "cp-red": "#FF0000",    // Warning Red
        "cp-black": "#000000",  // Pure Black
        "cp-bg": "#121212",     // Dark Background
        "cp-dark": "#050505",   // Darker Background
        "cp-text": "#E0E0E0",   // Off-white text
        "cp-dim": "#555555",    // Dimmed text
      },
      fontFamily: {
        "cyber": ["'Orbitron'", "sans-serif"],
        "tech": ["'Rajdhani'", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)",
        "dots-pattern": "radial-gradient(#333 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid": "40px 40px",
        "dots": "20px 20px",
      },
      animation: {
        "glitch": "glitch 1s linear infinite",
        "scanline": "scanline 8s linear infinite",
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "flicker": "flicker 0.15s infinite",
      },
      keyframes: {
        glitch: {
          "2%, 64%": { transform: "translate(2px,0) skew(0deg)" },
          "4%, 60%": { transform: "translate(-2px,0) skew(0deg)" },
          "62%": { transform: "translate(0,0) skew(5deg)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
}
