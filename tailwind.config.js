module.exports = {
  mode: 'jit',
  darkMode: false, // 'media' or 'class',
  content: {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
    options: {
      // https://purgecss.com/safelisting.html#patterns
      safelist: {
        standard: [/^bg-/, /^text-/],
      },
    },
  },
  theme: {
    extend: {
      spacing: {
        128: '32rem',
        196: '48rem',
      },
      fontSize: {
        xs: '.75rem',
        '2xs': '.5rem',
        '3xs': '.25rem',
        '4xs': '.13rem',
      },
    },
    fontFamily: {
      body: [
        'Hiragino Sans',
        'Avenir',
        'Helvetica Neue',
        'Helvetica',
        'Arial',
        'ヒラギノ角ゴシック',
        'メイリオ',
        'Meiryo',
        'YuGothic',
        'Yu Gothic',
        'MS PGothic',
        'sans-serif',
      ],
    },
  },
  plugins: [],
}
