import React from "react";
import { StyleSheet, View } from "react-native";
import { useTheme } from "react-native-paper";
import { ProductDescription } from "./ProductDescription";
import { ProductReviews } from "./ProductReviews";
import { ProductActions } from "./ProductActions";
import { ProductMore } from "./ProductMore";

export const ProductPage: React.FC = () => {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.background,
          shadowColor: theme.colors.shadow,
        },
      ]}
    >
      <ProductDescription />
      <ProductActions />
      <ProductReviews />
      <ProductMore />
      <View style={styles.spacer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 20,
    gap: 30,
  },
  spacer: {
    height: 100,
  },
});
