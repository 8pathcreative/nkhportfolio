/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    'postcss-import': {},
    '@tailwindcss/postcss': {},
    'autoprefixer': {},
    ...(process.env.NODE_ENV === 'production' ? { 
      cssnano: {
        preset: ['default', { discardComments: { removeAll: true } }]
      } 
    } : {})
  },
};

export default config;
