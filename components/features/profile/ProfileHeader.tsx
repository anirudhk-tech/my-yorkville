import { Text } from "@/components/ui/atoms/Text";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar } from "react-native-paper";

export const ProfileHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <Avatar.Image
        size={200}
        source={{
          uri: "https://static.vecteezy.com/system/resources/thumbnails/053/180/599/small/futuristic-cyberpunk-character-in-neon-lit-city-free-photo.jpg",
        }}
      />
      <Text variant="titleLarge" style={{ marginLeft: 10 }}>
        Anirudh Kuppili
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 20,
    alignItems: "center",
    marginTop: 20,
  },
});
