import { Text } from "@/components/ui/atoms/Text";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useTheme } from "react-native-paper";
import { BusinessDescription } from "./BusinessDescription";
import { BusinessProducts } from "./BusinessProducts";
import { BusinessReviews } from "./BusinessReviews";
import { BusinessFounders } from "./BusinessFounders";

export const BusinessPage: React.FC = () => {
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
      <BusinessDescription />
      <BusinessProducts />
      <BusinessReviews />
      <BusinessFounders />
      <View style={styles.spacer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    gap: 30,
  },
  spacer: {
    height: 50,
  },
});
