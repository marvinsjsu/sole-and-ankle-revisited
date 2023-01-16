export const COLORS = {
  white: 'hsl(0deg 0% 100%)',
  gray: {
    100: 'hsl(185deg 5% 95%)',
    300: 'hsl(190deg 5% 80%)',
    500: 'hsl(196deg 4% 60%)',
    700: 'hsl(220deg 5% 40%)',
    900: 'hsl(220deg 3% 20%)',
  },
  primary: 'hsl(340deg 65% 47%)',
  secondary: 'hsl(240deg 60% 63%)',
  transparentGray: 'hsla(220, 5%, 40%, 0.8)',
};

export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

export const BREAKPOINTS = {
  mobileMax: 600,
  tabletMax: 950,
  desktopMax: 1300,
};

export const QUERIES = {
  'mobileAndDown': `(max-width: ${BREAKPOINTS.mobileMax / 16}rem)`,
  'tabletAndDown': `(max-width: ${BREAKPOINTS.tabletMax / 16}rem)`,
  'desktopAndDown': `(max-width: ${BREAKPOINTS.desktopMax / 16}rem)`,
};
