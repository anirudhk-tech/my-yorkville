import { Text } from "@/components/ui/atoms/Text";
import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Icon, useTheme } from "react-native-paper";
import { useRouter } from "expo-router";
import { Review } from "@/components/ui/molecules/Review";

export const ProductReviews: React.FC = () => {
  const theme = useTheme();
  const RATING = 4.5;
  const REVIEWS = [
    {
      id: 1,
      title: "Divine!",
      content:
        "Absolutely incredible—rich, creamy, and packed with flavor. The coconut milk finish is divine. I could eat this every day!",
      rating: 5,
      submitterImagePath:
        "https://cdn.lucidpic.com/cdn-cgi/image/w=600,format=auto,metadata=none/66c43abe18502.png",
      submitterName: "John Doe",
    },
    {
      id: 2,
      title: "Good... but need bigger portions",
      content:
        "Smooth, flavorful, and well‑spiced. I especially loved the hint of turmeric. Would’ve given five stars if the portion was larger!.",
      rating: 4,
      submitterImagePath:
        "https://idsb.tmgrup.com.tr/ly/uploads/images/2023/11/14/301015.jpg",
      submitterName: "Will Smith",
    },
    {
      id: 3,
      title: "Average experience",
      content:
        "The flavors were okay, but the sauce felt a little thin and the chicken pieces were smaller than expected. Not bad, but not memorable.",
      rating: 3.5,
      submitterImagePath:
        "https://helios-i.mashable.com/imagery/articles/04imK4lcXZcMDygow99xUaG/hero-image.fill.size_1248x702.v1724855738.jpg",
      submitterName: "Jane Smith",
    },
  ];

  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.push("/product/ProductReviewsScreen")}
          style={styles.reviewCountAndTitle}
        >
          <Text variant="titleLarge">Reviews</Text>
          <Text
            variant="titleLarge"
            style={{ color: theme.colors.outline, marginLeft: 10 }}
          >
            ({REVIEWS.length})
          </Text>
          <Icon source="chevron-right" size={30} />
        </TouchableOpacity>
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
          <Review
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
  },
  seeAll: {
    textDecorationLine: "underline",
  },
});
