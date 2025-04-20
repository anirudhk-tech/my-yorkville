import { Text } from "@/components/ui/atoms/Text";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Icon, useTheme } from "react-native-paper";
import { BusinessReviewCard } from "./BusinessReviewCard";

export const BusinessReviews: React.FC = () => {
  const theme = useTheme();
  const RATING = 4.5;
  const REVIEWS = [
    {
      id: 1,
      title: "Great coffee!",
      content:
        "I love the chai latte here. It's the best I've ever had! The staff is also super friendly.",
      rating: 5,
      submitterImagePath:
        "https://cdn.lucidpic.com/cdn-cgi/image/w=600,format=auto,metadata=none/66c43abe18502.png",
      submitterName: "John Doe",
    },
    {
      id: 2,
      title: "Good atmosphere",
      content:
        "The ambiance is perfect for studying or working. I love the decor and the music they play.",
      rating: 4,
      submitterImagePath:
        "https://idsb.tmgrup.com.tr/ly/uploads/images/2023/11/14/301015.jpg",
      submitterName: "Will Smith",
    },
    {
      id: 3,
      title: "Average experience",
      content:
        "The coffee was okay, but I've had better elsewhere. The service was a bit slow too.",
      rating: 3.5,
      submitterImagePath:
        "https://helios-i.mashable.com/imagery/articles/04imK4lcXZcMDygow99xUaG/hero-image.fill.size_1248x702.v1724855738.jpg",
      submitterName: "Jane Smith",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.reviewCountAndTitle}>
          <Text variant="titleLarge">Reviews</Text>
          <Text variant="titleLarge" style={{ color: theme.colors.outline }}>
            ({REVIEWS.length})
          </Text>
        </View>
        <View style={styles.rating}>
          <Text variant="titleLarge">{RATING}</Text>
          <Icon source="star" size={20} />
        </View>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        nestedScrollEnabled={true}
        contentContainerStyle={{ gap: 10 }}
      >
        {REVIEWS.map((review) => (
          <BusinessReviewCard
            key={review.id}
            id={review.id}
            title={review.title}
            content={review.content}
            rating={review.rating}
            submitterImagePath={review.submitterImagePath}
            submitterName={review.submitterName}
          />
        ))}
      </ScrollView>
      <Text variant="bodyMedium" style={styles.seeAll}>
        See All Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  reviewCountAndTitle: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  seeAll: {
    textDecorationLine: "underline",
  },
});
