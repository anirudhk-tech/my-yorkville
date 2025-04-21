import {
  BusinessReviewCard,
  BusinessReviewCardProps,
} from "@/components/features/business/BusinessReviewCard";
import { List } from "@/components/ui/molecules/List";
import { Screen } from "@/components/ui/templates/Screen";
import { StackedScreen } from "@/components/ui/templates/StackedScreen";
import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";

export default function BusinessReviewsScreen() {
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

  const renderItem = ({ item }: { item: BusinessReviewCardProps }) => (
    <BusinessReviewCard
      id={item.id}
      title={item.title}
      content={item.content}
      rating={item.rating}
      submitterImagePath={item.submitterImagePath}
      submitterName={item.submitterName}
    />
  );

  const keyExtractor = (item: BusinessReviewCardProps) => item.id.toString();
  const theme = useTheme();

  return (
    <StackedScreen>
      <Stack.Screen
        options={{
          title: "Chai Kitchen's Reviews",
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
    </StackedScreen>
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
