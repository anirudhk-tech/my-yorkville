import React from "react";
import { StyleSheet, View } from "react-native";
import { Icon } from "react-native-paper";

export interface RatingProps {
  rating: number;
  size?: number;
}

export const Rating: React.FC<RatingProps> = ({ rating, size = 20 }) => {
  const fullStars = Math.floor(rating);
  const fraction = rating - fullStars;

  return (
    <View style={styles.container}>
      {Array.from({ length: fullStars }).map((_, i) => (
        <Icon key={`full-${i}`} source="star" size={size} />
      ))}

      {fraction > 0 && (
        <View
          style={[
            styles.fractionStarContainer,
            {
              width: size,
              height: size,
            },
          ]}
        >
          <Icon source="star-outline" size={size} />
          <View
            style={[
              styles.fractionStar,
              {
                width: size * fraction,
                height: size,
              },
            ]}
          >
            <Icon source="star" size={size} />
          </View>
        </View>
      )}

      {Array.from({ length: 5 - Math.ceil(rating) }).map((_, i) => (
        <Icon key={`empty-${i}`} source="star-outline" size={size} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  fractionStarContainer: {
    marginRight: 2,
    position: "relative",
  },
  fractionStar: {
    overflow: "hidden",
    position: "absolute",
    top: 0,
    left: 0,
  },
});
