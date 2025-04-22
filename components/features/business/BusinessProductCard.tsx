import { Text } from "@/components/ui/atoms/Text";
import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { useTheme } from "react-native-paper";

export interface BusinessProductCardProps {
  id: number;
  title: string;
  price: string;
  imagePath: string;
}

export const BusinessProductCard: React.FC<BusinessProductCardProps> = ({
  id,
  title,
  price,
  imagePath,
}) => {
  const router = useRouter();
  const theme = useTheme();

  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: "/product/[productId]",
          params: { productId: id },
        })
      }
      style={[
        styles.container,
        { backgroundColor: theme.colors.surfaceVariant },
      ]}
    >
      <Text style={styles.title} variant="titleSmall">
        {title}
      </Text>
      <Image
        source={{ uri: imagePath }}
        style={styles.image}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    overflow: "hidden",
    height: 150,
    width: 150,
    borderRadius: 20,
    gap: 10,
  },
  image: {
    flex: 1,
  },
  title: {
    paddingTop: 10,
    paddingLeft: 10,
    textAlign: "left",
  },
});
