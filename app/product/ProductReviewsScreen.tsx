import { List } from "@/components/ui/molecules/List";
import { Review, ReviewProps } from "@/components/ui/molecules/Review";
import { BottomSafeAreaScreen } from "@/components/ui/templates/BottomSafeAreaScreen";
import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";

export default function ProductReviewsScreen() {
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

  const renderItem = ({ item }: { item: ReviewProps }) => (
    <Review
      id={item.id}
      title={item.title}
      content={item.content}
      rating={item.rating}
      submitterImagePath={item.submitterImagePath}
      submitterName={item.submitterName}
    />
  );

  const keyExtractor = (item: ReviewProps) => item.id.toString();
  const theme = useTheme();

  return (
    <BottomSafeAreaScreen>
      <Stack.Screen
        options={{
          title: "Chicken Curry's Reviews",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: theme.colors.background },
          headerTitleStyle: { color: theme.colors.onBackground },
          headerTintColor: theme.colors.onBackground,
          headerBackTitle: "Back",
        }}
      />
      <List
        data={REVIEWS}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        style={styles.container}
        contentContainerStyle={styles.content}
      />
    </BottomSafeAreaScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    width: "100%",
    alignItems: "center",
    gap: 20,
  },
});
