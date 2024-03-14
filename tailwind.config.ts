import type { Config } from "tailwindcss";
import { darkBackground } from "./blog.config";

const config: Config = {
    content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                dark: darkBackground || "#a55651",
                gray: "#3b8aaa",
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
export default config;
