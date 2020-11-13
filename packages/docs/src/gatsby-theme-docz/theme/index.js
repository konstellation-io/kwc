import 'react-dates/initialize';

import * as colors from './dark-theme-colors';

import baseTheme from 'gatsby-theme-docz/src/theme/index';
import { merge } from 'lodash/fp';

export default merge(baseTheme, {
  initialColorMode: 'dark',
  fontSizes: [12, 14, 15, 16, 20, 24, 32, 48],
  colors: {
    modes: {
      dark: {
        text: colors.fontLight,
        background: colors.base600,
        border: colors.base400,
        primary: colors.highlight,
        header: {
          bg: colors.base900,
          text: colors.fontLight,
          button: {
            bg: colors.feedback,
          },
        },
        sidebar: {
          bg: colors.base450,
          navLinkActive: colors.highlight,
          navGroup: colors.fontLowlight,
        },
        props: {
          bg: colors.base450,
          text: colors.fontLowlight,
          highlight: colors.highlight,
          defaultValue: colors.feedback,
          descriptionText: colors.fontLowlight,
          descriptionBg: colors.base450,
        },
        playground: {
          bg: colors.base600,
          border: colors.base400,
        },
        blockquote: {
          bg: colors.base400,
          border: colors.feedback,
          color: colors.fontLowlight,
        },
      },
    },
  },
});
