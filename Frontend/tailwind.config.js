/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    "Helvetica Neue",
                    "Helvetica",
                    "Arial",
                    "ui-sans-serif",
                    "system-ui",
                    "-apple-system",
                    "BlinkMacSystemFont",
                    "sans-serif",
                ],
                poppins: ["Poppins", "sans-serif"],
            },
        },
    },
    plugins: [],
};

