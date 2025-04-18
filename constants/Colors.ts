import { MD3DarkTheme, MD3LightTheme, type MD3Theme } from "react-native-paper";

// Minimalistic, Modern Material Design 3 Light Theme
export const LIGHT_THEME: MD3Theme = {
  ...MD3LightTheme,
  dark: false,
  roundness: 4, // global border radius for components
  colors: {
    primary: "#1E88E5", // blue600: Buttons, FAB, active elements
    onPrimary: "#FFFFFF", // white: Text/icons on primary surfaces
    primaryContainer: "#BBDEFB", // blue100: Button hover/pressed backgrounds
    onPrimaryContainer: "#1E88E5", // blue600: Text on primaryContainer
    inversePrimary: "#BBDEFB", // blue100: Used on inverse surfaces

    secondary: "#03DAC6", // teal200: Secondary buttons, toggles
    onSecondary: "#000000", // black: Text/icons on secondary surfaces
    secondaryContainer: "#B2F2EA", // teal100: Hover state for secondary
    onSecondaryContainer: "#018786", // teal700: Text on secondaryContainer

    tertiary: "#018786", // teal700: Accent highlights
    onTertiary: "#FFFFFF", // white: Text/icons on tertiary
    tertiaryContainer: "#A7FFEB", // teal50: Tertiary hover surfaces
    onTertiaryContainer: "#014F45", // teal900: Text on tertiaryContainer

    error: "#B00020", // red800: Error states
    onError: "#FFFFFF", // white: Text/icons on error surfaces
    errorContainer: "#F8D7DA", // red50: Error background
    onErrorContainer: "#790000", // red900: Text on errorContainer

    background: "#FFFFFF", // white: App background
    onBackground: "#000000", // black: Body text

    surface: "#FFFFFF", // white: Cards, sheets
    onSurface: "#000000", // black: Text on surfaces
    surfaceVariant: "#F5F5F5", // grey50: Hoverable surfaces
    onSurfaceVariant: "#222222", // grey900: Text on variant surfaces
    surfaceDisabled: "rgba(0,0,0,0.12)", // for disabled surfaces
    onSurfaceDisabled: "rgba(0,0,0,0.38)", // text/icons on disabled surfaces

    outline: "#E0E0E0", // grey300: Borders, dividers
    outlineVariant: "#BDBDBD", // grey400: Faded dividers
    shadow: "#000000", // black: Shadows
    scrim: "rgba(0,0,0,0.5)", // overlay scrim for modals

    inverseSurface: "#121212", // grey900: Inverted surfaces
    inverseOnSurface: "#FFFFFF", // white: Text on inverted surfaces
    backdrop: "rgba(0,0,0,0.5)", // semi-transparent: Overlays

    elevation: {
      level0: "transparent", // no elevation
      level1: "#FFFFFF", // card shadows
      level2: "#FAFAFA", // modal shadows
      level3: "#F5F5F5", // dialog shadows
      level4: "#F0F0F0", // heavy shadows
      level5: "#EBEBEB", // darkest light shadows
    },
  },
  animation: { scale: 1.0 }, // no scaling on animations
};

// Minimalistic, Modern Material Design 3 Dark Theme
export const DARK_THEME: MD3Theme = {
  ...MD3DarkTheme,
  dark: true,
  roundness: 4, // consistent border radius
  colors: {
    primary: "#90CAF9", // blue200: Buttons, FAB, active elements
    onPrimary: "#0D47A1", // blue900: Text/icons on primary
    primaryContainer: "#1565C0", // blue800: Hover/pressed backgrounds
    onPrimaryContainer: "#FFFFFF", // white: Text on containers
    inversePrimary: "#90CAF9", // blue200: Used on inverse surfaces

    secondary: "#66FFF9", // cyan100: Secondary actions
    onSecondary: "#000000", // black: Text/icons on secondary
    secondaryContainer: "#005049", // cyan900: Hover for secondary
    onSecondaryContainer: "#B2F2EA", // cyan50: Text on secondaryContainer

    tertiary: "#4DB6AC", // teal300: Accent highlights
    onTertiary: "#004D40", // teal900: Text/icons on tertiary
    tertiaryContainer: "#004D40", // teal900: Hover surfaces
    onTertiaryContainer: "#A7FFEB", // teal50: Text on tertiaryContainer

    error: "#CF6679", // pink200: Error states
    onError: "#000000", // black: Text/icons on error
    errorContainer: "#8E0038", // pink900: Error backgrounds
    onErrorContainer: "#FFB3BC", // pink50: Text on errorContainer

    background: "#121212", // grey900: App background
    onBackground: "#FFFFFF", // white: Body text

    surface: "#121212", // grey900: Cards, sheets
    onSurface: "#FFFFFF", // white: Text on surfaces
    surfaceVariant: "#2C2C2C", // grey800: Hoverable surfaces
    onSurfaceVariant: "#CCCCCC", // grey300: Text on variant surfaces
    surfaceDisabled: "rgba(255,255,255,0.12)", // disabled surfaces
    onSurfaceDisabled: "rgba(255,255,255,0.38)", // text/icons on disabled

    outline: "#444444", // grey700: Borders, dividers
    outlineVariant: "#666666", // grey600: Faded dividers
    shadow: "#000000", // black: Shadows
    scrim: "rgba(255,255,255,0.5)", // overlay scrim for modals

    inverseSurface: "#F5F5F5", // grey50: Inverted surfaces
    inverseOnSurface: "#1E1E1E", // grey900: Text on inverted surfaces
    backdrop: "rgba(255,255,255,0.5)", // semi-transparent: Overlays

    // Elevation overlays for dark theme
    elevation: {
      level0: "transparent", // no elevation
      level1: "#1C1C1C", // card shadows
      level2: "#212121", // modal shadows
      level3: "#262626", // dialog shadows
      level4: "#2C2C2C", // heavy shadows
      level5: "#323232", // darkest shadows
    },
  },
  animation: { scale: 1.0 }, // no scaling on animations
};
