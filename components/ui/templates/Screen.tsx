import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

interface ScreenProps {
  children: React.ReactNode;
}

export const Screen: React.FC<ScreenProps> = ({ children }) => {
  const theme = useTheme();

  return (
    <View style={[styles.full, { backgroundColor: theme.colors.background }]}>
      <StatusBar
        backgroundColor={theme.colors.background}
        translucent={Platform.OS === "android"}
      />
      <SafeAreaView
        edges={["top", "bottom"]}
        style={[styles.safeArea, { backgroundColor: theme.colors.background }]}
      >
        <View
          style={[styles.content, { backgroundColor: theme.colors.background }]}
        >
          {children}
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  full: { flex: 1 },
  safeArea: { flex: 1 },
  content: {
    flex: 1,
  },
});
