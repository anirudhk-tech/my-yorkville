import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Text } from "react-native-paper";

export interface BusinessFounderCardProps {
  name: string;
  imagePath: string;
  id: number;
}

export const BusinessFounderCard: React.FC<BusinessFounderCardProps> = ({
  name,
  imagePath,
  id,
}) => {
  return (
    <View style={styles.container}>
      <Avatar.Image source={{ uri: imagePath }} size={100} />
      <Text variant="titleMedium">{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
