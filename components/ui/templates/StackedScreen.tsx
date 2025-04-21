import { StatusBar } from "expo-status-bar";
import React from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

interface StackedScreenProps {
  children: React.ReactNode;
}

export const StackedScreen: React.FC<StackedScreenProps> = ({ children }) => {
  const theme = useTheme();

  return (
    <KeyboardAvoidingView
      style={styles.full}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 70 : 120}
    >
      <View style={[styles.full, { backgroundColor: theme.colors.background }]}>
        <StatusBar
          backgroundColor={theme.colors.background}
          translucent={Platform.OS === "android"}
        />
        <SafeAreaView
          edges={["bottom"]}
          style={[
            styles.safeArea,
            { backgroundColor: theme.colors.background },
          ]}
        >
          <View
            style={[
              styles.content,
              { backgroundColor: theme.colors.background },
            ]}
          >
            {children}
          </View>
        </SafeAreaView>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  full: { flex: 1 },
  safeArea: { flex: 1 },
  content: {
    flex: 1,
  },
});
