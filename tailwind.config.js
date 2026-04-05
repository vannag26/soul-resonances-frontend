export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'brand-purple': '#4c1d95',
        'brand-purple-dark': '#2d0d47',
        'brand-gold': '#d97706',
        'brand-cream': '#fef3c7',
        'brand-beige': '#f5e6d3'
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif']
      }
    }
  },
  plugins: []
}
