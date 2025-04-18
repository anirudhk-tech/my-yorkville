import { FlatList, StyleSheet } from "react-native";
import { DiscoverCard } from "./DiscoverCard";
import React from "react";

export interface DiscoverCardData {
  title: string;
  id: number;
  imagePath: string;
  price: string;
  sellerName: string;
  sellerImage: string;
}

export const DiscoverCardList: React.FC = () => {
  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.content}
      data={[
        {
          title: "Chicken Curry",
          id: 1,
          imagePath:
            "https://www.foodandwine.com/thmb/8YAIANQTZnGpVWj2XgY0dYH1V4I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spicy-chicken-curry-FT-RECIPE0321-58f84fdf7b484e7f86894203eb7834e7.jpg",
          price: "$10",
          sellerName: "Anirudh Kuppili",
          sellerImage:
            "https://static.vecteezy.com/system/resources/thumbnails/053/180/599/small/futuristic-cyberpunk-character-in-neon-lit-city-free-photo.jpg",
        },
      ]}
      renderItem={({ item }: { item: DiscoverCardData }) => (
        <DiscoverCard
          id={item.id}
          title={item.title}
          price={item.price}
          imagePath={item.imagePath}
          sellerName={item.sellerName}
          sellerImage={item.sellerImage}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  container: { flexGrow: 1 },
  content: {
    flexGrow: 1,
    padding: 16,
  },
});
