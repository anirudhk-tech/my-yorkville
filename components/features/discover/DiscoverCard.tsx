import React from "react";
import { StyleSheet } from "react-native";
import { Avatar, Card, Chip, useTheme } from "react-native-paper";

interface DiscoverCardProps {
  id: number;
  sellerName: string;
  sellerImage: string;
  title: string;
  price: string;
  imagePath: string;
}

export const DiscoverCard: React.FC<DiscoverCardProps> = ({
  title,
  price,
  imagePath,
  id,
  sellerName,
  sellerImage,
}) => {
  const theme = useTheme();
  return (
    <Card style={styles.container} mode="contained">
      <Card.Title
        title={title}
        style={styles.title}
        right={() => <Avatar.Image source={{ uri: sellerImage }} size={30} />}
      />
      <Card.Cover style={styles.cover} source={{ uri: imagePath }} />
      <Chip
        style={[styles.chip, { backgroundColor: theme.colors.inverseSurface }]}
        textStyle={{ color: theme.colors.inverseOnSurface }}
        mode="flat"
      >
        {price}
      </Chip>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    overflow: "hidden",
  },
  title: {
    paddingHorizontal: 15,
    paddingVertical: 0,
  },
  chip: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  cover: {
    width: "100%",
    margin: 0,
    padding: 0,
    backgroundColor: "transparent",
  },
});
