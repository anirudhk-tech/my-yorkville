import { Text } from "@/components/ui/atoms/Text";
import { Ripple } from "@/components/ui/molecules/Ripple";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, useTheme } from "react-native-paper";

export const DiscoverHeader: React.FC = () => {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.surface }]}>
      <Text variant="titleLarge" style={{ color: theme.colors.onSurface }}>
        Discover
      </Text>
      <Ripple
        onPress={() => console.log("Home avatar pressed")}
        style={styles.ripple}
      >
        <Avatar.Icon
          size={50}
          icon="account"
          style={[styles.avatar, { backgroundColor: theme.colors.primary }]}
        />
      </Ripple>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 56,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  avatar: {},
  ripple: {
    borderRadius: 60,
  },
});
