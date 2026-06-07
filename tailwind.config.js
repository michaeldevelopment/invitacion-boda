/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        vinotinto: '#7B2535',
        borgona: '#60141A',
        olivo: '#7A8D61',
        terracota: '#AB7E6C',
        crema: '#E8E1D3',
        'crema-dark': '#D9CFBF',
        dorado: '#C9A84C',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        // Propuesta6 — nuevas tipografías exclusivas
        allura: ['"Great Vibes"', 'cursive'],
        display: ['"Montserrat"', 'system-ui', 'sans-serif'],
        label: ['"Montserrat"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.3em',
        'ultra-wide': '0.5em',
      },
    },
  },
  plugins: [],
}
