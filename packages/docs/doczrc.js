import { css } from 'docz-plugin-css';

export default {
  typescript: true,
  base: '/kwc/',
  src: './src/docs',
  title: 'Konstellation Web Components',
  menu: ['Readme', 'Design', 'Layout', 'Components', 'Forms', 'Hooks'],
  plugins: [
    css({
      preprocessor: 'sass',
      cssmodules: true
    })
  ]
};
