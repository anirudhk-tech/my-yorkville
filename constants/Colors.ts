import { MD3Theme, MD3LightTheme, MD3DarkTheme } from "react-native-paper";

// Minimalistic Light Theme for MD3
export const LightTheme: MD3Theme = {
  ...MD3LightTheme,
  roundness: 10,
  colors: {
    ...MD3LightTheme.colors,
    // Primary palette
    primary: "#6200ee",
    onPrimary: "#ffffff",
    primaryContainer: "#bb86fc",
    onPrimaryContainer: "#000000",

    // Secondary palette
    secondary: "#03dac6",
    onSecondary: "#000000",
    secondaryContainer: "#66fff9",
    onSecondaryContainer: "#000000",

    // Background, Surface, and Error
    background: "#ffffff",
    onBackground: "#000000",
    surface: "#ffffff",
    onSurface: "#000000",
    error: "#B00020",
    onError: "#ffffff",

    shadow: "#000000",
  },
};

// Minimalistic Dark Theme for MD3
export const DarkTheme: MD3Theme = {
  ...MD3DarkTheme,
  roundness: 4, // adjust as needed
  colors: {
    ...MD3DarkTheme.colors,
    // Primary palette
    primary: "#bb86fc",
    onPrimary: "#000000",
    primaryContainer: "#3700b3",
    onPrimaryContainer: "#ffffff",

    // Secondary palette
    secondary: "#03dac6",
    onSecondary: "#000000",
    secondaryContainer: "#03dac6",
    onSecondaryContainer: "#000000",

    // Background, Surface, and Error
    background: "#ffffff",
    onBackground: "#ffffff",
    surface: "#121212",
    onSurface: "#ffffff",
    error: "#cf6679",
    onError: "#000000",

    shadow: "#000000",
  },
};
