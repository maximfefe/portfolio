module.exports = {
    daisyui: {
        themes: [
            {
                portfolio: {
                    "primary": "#112F3F",
                    "secondary": "#F6D9AA",
                    "accent": "#1fb2a6",
                    "neutral": "#1a1b1c",
                    "base-100": "#F1F1F1",
                    "info": "#3abff8",
                    "success": "#36d399",
                    "warning": "#fbbd23",
                    "error": "#f87272",
                },
            },
        ],
    },
    theme: {
        extend: {
          fontFamily: {
            'sans': ['Montserrat', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
            'title': ['Druk Wide Bold', 'Montserrat', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
          },
        },
      },
    content: ['./src/**/*.{vue,js,ts}'],
    plugins: [require('daisyui')],
  };