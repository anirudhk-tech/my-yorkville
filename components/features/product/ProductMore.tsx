import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { ProductCard } from "./ProductCard";

export const ProductMore: React.FC = () => {
  const theme = useTheme();

  const MORE = [
    {
      title: "Chicken 65",
      id: 1,
      imagePath:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/chicken-65-restaurant-style.jpg",
      price: "$10",
      sellerName: "Anirudh Kuppili",
      sellerImage:
        "https://static.vecteezy.com/system/resources/thumbnails/053/180/599/small/futuristic-cyberpunk-character-in-neon-lit-city-free-photo.jpg",
    },
  ];

  return (
    <View style={styles.container}>
      <Text variant="titleLarge">More Like This</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        nestedScrollEnabled={true}
        contentContainerStyle={{ gap: 10 }}
      >
        {MORE.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            imagePath={item.imagePath}
            sellerName={item.sellerName}
            sellerImage={item.sellerImage}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
});
