// The width of the screen based on the device.
const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

// Must be ordered from smallest to largest when used.
export const deviceQuery = {
  mobileS: `@media (min-width: ${size.mobileS})`,
  mobileM: `@media (min-width: ${size.mobileM})`,
  mobileL: `@media (min-width: ${size.mobileL})`,
  tablet: `@media (min-width: ${size.tablet})`,
  laptop: `@media (min-width: ${size.laptop})`,
  laptopL: `@media (min-width: ${size.laptopL})`,
  desktop: `@media (min-width: ${size.desktop})`,
  desktopL: `@media (min-width: ${size.desktop})`,
};

// Holds the values of all the different pages.
export enum Page {
  HOME,
  RESUME,
  PROJECTS,
  GAMES,
}
