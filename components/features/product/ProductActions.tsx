import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Button, Text } from "react-native-paper";

export const ProductActions: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.actions}>
        <Button mode="contained" onPress={() => {}}>
          Save
        </Button>
        <Button mode="text" onPress={() => {}}>
          Message
        </Button>
      </View>
      <TouchableOpacity
        onPress={() =>
          router.push({
            pathname: "/business/[businessId]",
            params: { businessId: "businessId" },
          })
        }
      >
        <Text variant="bodyMedium" style={styles.soldBy}>
          Learn more about the seller
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sellingBusinessDetailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  soldBy: {
    textDecorationLine: "underline",
  },
});
