import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Icon, useTheme } from "react-native-paper";

export const ProductImage: React.FC = () => {
  const theme = useTheme();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://www.foodandwine.com/thmb/8YAIANQTZnGpVWj2XgY0dYH1V4I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spicy-chicken-curry-FT-RECIPE0321-58f84fdf7b484e7f86894203eb7834e7.jpg",
        }}
        style={styles.image}
      />
      <TouchableOpacity
        onPress={() => router.dismiss()}
        style={[
          styles.backContainer,
          { backgroundColor: theme.colors.surface },
        ]}
      >
        <Icon
          source="chevron-left"
          size={30}
          color={theme.colors.onBackground}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: 300,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  backContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    borderRadius: 50,
    padding: 10,
  },
});
