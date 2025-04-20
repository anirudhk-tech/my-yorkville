import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { BusinessProductCard } from "./BusinessProductCard";

export const BusinessProducts: React.FC = () => {
  const PRODUCT_DATA = [
    {
      id: 1,
      title: "Chai Latte",
      price: "$4.50",
      imagePath:
        "https://www.royalcupcoffee.com/sites/default/files/images/blog/AdobeStock_159183621update.jpg",
    },
    {
      id: 2,
      title: "Matcha Latte",
      price: "$5.00",
      imagePath:
        "https://somedayilllearn.com/wp-content/uploads/2020/05/cup-of-black-coffee-scaled-720x540.jpeg",
    },
    {
      id: 3,
      title: "Espresso",
      price: "$3.00",
      imagePath:
        "https://www.cariboucoffee.com/wp-content/uploads/2020/07/2024_MediumRoast-15_2000x2000.jpg",
    },
    {
      id: 4,
      title: "Cappuccino",
      price: "$4.00",
      imagePath:
        "https://www.royalcupcoffee.com/sites/default/files/images/blog/AdobeStock_159183621update.jpg",
    },
    {
      id: 5,
      title: "Iced Coffee",
      price: "$3.50",
      imagePath:
        "https://somedayilllearn.com/wp-content/uploads/2020/05/cup-of-black-coffee-scaled-720x540.jpeg",
    },
  ];

  return (
    <View style={styles.container}>
      <Text variant="titleLarge">Products</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        nestedScrollEnabled={true}
        contentContainerStyle={{ gap: 10 }}
      >
        {PRODUCT_DATA.map((product) => (
          <BusinessProductCard
            title={product.title}
            price={product.price}
            imagePath={product.imagePath}
            key={product.id}
            id={product.id}
          />
        ))}
      </ScrollView>
      <Text variant="bodyMedium" style={styles.seeMore}>
        See More
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  seeMore: {
    textDecorationLine: "underline",
  },
});
