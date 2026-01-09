/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                space: {
                    void: "#030014",
                    deep: "#0a0a25",
                    accent: "#7000ff",
                    primary: "#00d2ff",
                    secondary: "#ff00c1",
                    gold: "#ffd700",
                    text: "#ffffff",
                    dim: "#94a3b8",
                },
                neo: {
                    black: "#ffffff",
                    white: "#030014",
                    red: "#ff00c1",
                    pink: "#1e1b4b",
                    blue: "#00d2ff",
                    mint: "#00d2ff",
                    yellow: "#ffd700",
                },
            },
            boxShadow: {
                glow: "0 0 20px rgba(112, 0, 255, 0.3)",
                "glow-primary": "0 0 25px rgba(0, 210, 255, 0.4)",
                neo: "0px 4px 30px rgba(112, 0, 255, 0.2)",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                display: ["Space Grotesk", "sans-serif"],
            },
            animation: {
                marquee: "marquee 30s linear infinite",
                loading: "loading 2s ease-in-out infinite",
                wiggle: "wiggle 0.3s ease-in-out infinite",
                "side-shake": "side-shake 0.2s ease-in-out infinite",
                "glow-pulse": "glow-pulse 2s ease-in-out infinite",
            },
            keyframes: {
                marquee: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-50%)" },
                },
                loading: {
                    "0%": { transform: "translateX(-100%)" },
                    "100%": { transform: "translateX(100%)" },
                },
                wiggle: {
                    "0%, 100%": { transform: "rotate(-10deg)" },
                    "50%": { transform: "rotate(10deg)" },
                },
                "side-shake": {
                    "0%, 100%": { transform: "translateX(0)" },
                    "25%": { transform: "translateX(-4px)" },
                    "75%": { transform: "translateX(4px)" },
                },
                "glow-pulse": {
                    "0%, 100%": { filter: "drop-shadow(0 0 5px #7000ff)" },
                    "50%": { filter: "drop-shadow(0 0 20px #7000ff)" },
                },
            },
        },
    },
    plugins: [],
};
