import { Stack, useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Icon, useTheme } from "react-native-paper";

export interface BusinessImageProps {
  stacked: boolean;
}

export const BusinessImage: React.FC<BusinessImageProps> = ({ stacked }) => {
  const router = useRouter();
  const theme = useTheme();

  return (
    <View style={styles.container}>
      {stacked && <Stack.Screen options={{ headerShown: false }} />}
      <Image
        source={{
          uri: "https://static.vecteezy.com/system/resources/previews/014/897/912/non_2x/coffee-house-horizontal-banner-with-a-glass-mug-of-multi-layered-hot-cappuccino-with-lush-foam-of-whipped-cream-food-illustration-for-shop-cafe-bar-barista-flyer-advertising-promo-menu-vector.jpg",
        }}
        style={styles.image}
      />
      {stacked && (
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
      )}
    </View>
  );
};

const HEADER_HEIGHT = 200;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: HEADER_HEIGHT,
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
