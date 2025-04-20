import React from "react";
import { Image, StyleSheet } from "react-native";

export const BusinessImage: React.FC = () => {
  return (
    <Image
      source={{
        uri: "https://images.trophydepot.com/QC/images/products/Bistro%20&%20Cafe%203x5%20Grommet.jpg",
      }}
      style={styles.image}
    />
  );
};

const HEADER_HEIGHT = 200;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: HEADER_HEIGHT,
    top: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
