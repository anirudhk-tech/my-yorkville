// TabBarBackground.android.tsx
import React from "react";
import { View, StyleSheet } from "react-native";

export default function TabBarBackground() {
  // solid white‑semiopaque background on Android
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        { backgroundColor: "rgba(255,255,255,0.9)" },
      ]}
    />
  );
}
