import { Text } from "@/components/ui/atoms/Text";
import { Rating } from "@/components/ui/molecules/Rating";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, useTheme } from "react-native-paper";

export interface ReviewProps {
  id: number;
  title: string;
  content: string;
  rating: number;
  submitterImagePath: string;
  submitterName: string;
}
export const Review: React.FC<ReviewProps> = ({
  id,
  title,
  content,
  rating,
  submitterImagePath,
  submitterName,
}) => {
  const theme = useTheme();
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.colors.surfaceVariant },
      ]}
    >
      <View style={styles.header}>
        <Text variant="titleMedium">{title}</Text>
        <Avatar.Image source={{ uri: submitterImagePath }} size={40} />
      </View>
      <Rating rating={rating} size={20} />
      <Text variant="bodyMedium">{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: "hidden",
    height: 200,
    width: 300,
    padding: 10,
    gap: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
});
