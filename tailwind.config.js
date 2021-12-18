module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: () => ({
        'primary': '#A7D4DA',
        'spot': '#6E9292',
        'food': '#738677',
        'hotel': '#C2BB96',
        'transport':'#AA796C'
      }),
      gradientColorStops: () => ({
        'food': '#A7B4AA',
        'hotel':'#E6DDB2',
        'primary': '#A7D4DA',
        'transport':'#E6BEB4'
      }),
      height: {
        banner: '700px',
        content: 'max-content',
        footer: '76px',
        bottomInfo: '376px',
        suggestionBlock: '660px',
        transportBackground: '1424px',
      },
      width: {
        container: '1280px',
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
