const withOpacity = (variable) => {
  return ({ opacityValue } = {}) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`
    }
    return `rgb(var(${variable}) / ${opacityValue})`
  }
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: withOpacity("--color-midnight"),
        cyber: withOpacity("--color-cyber"),
        royal: withOpacity("--color-royal"),
        warm: withOpacity("--color-warm"),
        amber: withOpacity("--color-amber"),
      },
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        xl: "1.25rem",
      },
      boxShadow: {
        card: "0 25px 50px -12px rgba(4, 217, 196, 0.25)",
      },
      backgroundImage: {
        "mesh-gradient":
          "radial-gradient(circle at 20% 20%, rgb(var(--color-cyber) / 0.25), transparent 35%), radial-gradient(circle at 80% 0%, rgb(var(--color-royal) / 0.3), transparent 40%), radial-gradient(circle at 50% 80%, rgb(var(--color-amber) / 0.2), transparent 45%)",
      },
    },
  },
  plugins: [],
}
