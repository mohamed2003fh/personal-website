/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#071826",
        cyber: "#04D9C4",
        royal: "#246BFD",
        warm: "#F4F5F7",
        amber: "#FFB347"
      },
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"]
      },
      borderRadius: {
        xl: "1.25rem"
      },
      boxShadow: {
        card: "0 25px 50px -12px rgba(4, 217, 196, 0.25)"
      },
      backgroundImage: {
        "mesh-gradient":
          "radial-gradient(circle at 20% 20%, rgba(4,217,196,0.25), transparent 35%), radial-gradient(circle at 80% 0%, rgba(36,107,253,0.3), transparent 40%), radial-gradient(circle at 50% 80%, rgba(255,179,71,0.2), transparent 45%)"
      }
    }
  },
  plugins: []
};
