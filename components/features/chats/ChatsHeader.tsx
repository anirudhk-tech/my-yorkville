import { Text } from "@/components/ui/atoms/Text";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useTheme } from "react-native-paper";

export const ChatsHeader: React.FC = () => {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.surface }]}>
      <Text variant="titleLarge" style={{ color: theme.colors.onSurface }}>
        Chats
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 56,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  avatar: {},
  ripple: {
    borderRadius: 60,
  },
});
