import { Text } from "@/components/ui/atoms/Text";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
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
  const theme = useTheme();
  return (
    <View
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
    </View>
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
