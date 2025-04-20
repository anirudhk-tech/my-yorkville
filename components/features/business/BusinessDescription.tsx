import { Text } from "@/components/ui/atoms/Text";
import React from "react";
import { StyleSheet, View } from "react-native";

export const BusinessDescription: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text variant="titleLarge">Chai Kitchen</Text>
      <Text variant="bodyMedium">
        Chai Kitchen is a cozy neighborhood spot where single‑origin espresso,
        handcrafted teas, and fresh pastries meet a bright, plant‑filled
        interior. Committed to sustainability and community, we source locally,
        offer free Wi‑Fi, and host regular events to bring people together over
        exceptional coffee.
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
    marginTop: 15,
  },
  readMore: {
    textDecorationLine: "underline",
  },
});
