import { Text } from "@/components/ui/atoms/Text";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Surface, useTheme } from "react-native-paper";

export const ProductDescription: React.FC = () => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.titleAndPriceContainer}>
        <Text variant="titleLarge">Chicken Curry</Text>
        <Surface
          style={[
            styles.price,
            {
              backgroundColor: theme.colors.onBackground,
            },
          ]}
        >
          <Text variant="titleSmall" style={{ color: theme.colors.background }}>
            $10
          </Text>
        </Surface>
      </View>
      <Text variant="bodyMedium">
        Tender, bite‑sized pieces of free‑range chicken marinated in yogurt and
        a house‑made blend of garam masala, turmeric, and coriander, then
        simmered slowly in a silky tomato‑onion gravy. Finished with a splash of
        coconut milk and fresh cilantro, it balances warmth and creaminess in
        every spoonful. Served with fragrant basmati rice or warm naan for the
        perfect, soul‑soothing meal.
      </Text>
      <Text variant="bodyMedium" style={styles.readMore}>
        Read More
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  titleAndPriceContainer: {
    flexDirection: "row",
    gap: 10,
  },
  price: {
    padding: 5,
    borderRadius: 6,
  },
  readMore: {
    textDecorationLine: "underline",
  },
});
