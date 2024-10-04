/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/**/*.{html,js,css,htmx,jsx,tsx}",
    "./public/**/*.{html,js,css,htmx,jsx,tsx}",
    "./css/**/*.{html,js,css,htmx,jsx,tsx}",
  ],
  theme: {
    extend: {

      keyframes: {
        moveInCircle: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(180deg)" },
          "100%": { transform: "rotate(360deg)" },
        },

        moveInCircle2: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(180deg)" },
          "100%": { transform: "rotate(360deg)" },
        },

        moveVertical: {
          "0%": { transform: "translateY(-50%)" },
          "50%": { transform: "translateY(50%)" },
          "100%": { transform: "translateY(-50%)" },
        },
        moveHorizontal: {
          "0%": { transform: "translateX(-50%) translateY(-10%)" },
          "50%": { transform: "translateX(50%) translateY(10%)" },
          "100%": { transform: "translateX(-50%) translateY(-10%)" },
        },
      },
      animation: {
        moveInCircle: "moveInCircle 5s ease infinite",
        moveInCircle2: "moveInCircle 2s ease infinite",
        moveVertical: "moveVertical 5s ease infinite",
        moveHorizontal: "moveHorizontal 5s ease infinite",
      },

      scrollbar: {
        thumb: {
          DEFAULT: 'w-[12px] h-[12px] mt-[8px] rounded-full bg-[#111419]',
        },
        track: {
          DEFAULT: 'w-[4px] h-[220px] rounded-full bg-[#ABBDCD]',
        },
      },

      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },

    },
  }, 
  
  plugins: [

  ],
};