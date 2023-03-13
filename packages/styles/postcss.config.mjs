import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import postcssEach from 'postcss-each';
import atImport from 'postcss-import';
import prefixer from './prefixer.mjs';

const config = {
  plugins: [
    atImport(),
    prefixer({ prefix: '.openlooks' }),
    postcssEach(),
    autoprefixer(),
    cssnano({ preset: 'default' }),
  ],
};

export default config;
