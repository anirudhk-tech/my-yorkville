import { Text } from "@/components/ui/atoms/Text";
import { Ripple } from "@/components/ui/molecules/Ripple";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Avatar, useTheme } from "react-native-paper";

export const DiscoverHeader: React.FC = () => {
  const theme = useTheme();
  const router = useRouter();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.surface }]}>
      <Text variant="titleLarge" style={{ color: theme.colors.onSurface }}>
        Discover
      </Text>
      <TouchableOpacity
        onPress={() =>
          router.push({
            pathname: "/profile/[userId]",
            params: { userId: "me" },
          })
        }
      >
        <Avatar.Image
          size={50}
          source={{
            uri: "https://static.vecteezy.com/system/resources/thumbnails/053/180/599/small/futuristic-cyberpunk-character-in-neon-lit-city-free-photo.jpg",
          }}
          style={{ backgroundColor: theme.colors.primary }}
        />
      </TouchableOpacity>
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
});
