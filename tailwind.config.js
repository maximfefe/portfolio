module.exports = {
    daisyui: {
        themes: [
            {
                portfolio: {
                    "primary": "#112F3F",
                    "secondary": "#F6D9AA",
                    "accent": "#1fb2a6",
                    "neutral": "#1d232a",
                    "base-100": "#F1F1F1",
                    "info": "#3abff8",
                    "success": "#36d399",
                    "warning": "#fbbd23",
                    "error": "#f87272",
                },
            },
        ],
    },
    content: ['./src/**/*.{vue,js,ts}'],
    plugins: [require('daisyui')],
  };