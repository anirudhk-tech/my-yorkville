// TabBarBackground.android.tsx
import React from "react";
import { View, StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";

export default function TabBarBackground() {
  const theme = useTheme();
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        { backgroundColor: theme.colors.surface },
      ]}
    />
  );
}
