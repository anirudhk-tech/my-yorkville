import { Text } from "@/components/ui/atoms/Text";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { BusinessFounderCard } from "./BusinessFounderCard";

export const BusinessFounders: React.FC = () => {
  const FOUNDERS = [
    {
      id: 1,
      name: "Skye Mason",
      imagePath:
        "https://cdn.lucidpic.com/cdn-cgi/image/w=600,format=auto,metadata=none/66e2e5fbe0cca.png",
    },
    {
      id: 2,
      name: "Will Smith",
      imagePath:
        "https://images.ladbible.com/resize?type=webp&quality=70&width=3840&fit=contain&gravity=auto&url=https://images.ladbiblegroup.com/v3/assets/bltb5d92757ac1ee045/blt864986663773d3e0/665435935939380b65262cb8/AI-creates-what-the-average-person.png%3Fcrop%3D590%2C590%2Cx0%2Cy0",
    },
  ];

  return (
    <View style={styles.container}>
      <Text variant="titleLarge">Meet The Founders</Text>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        horizontal
        showsHorizontalScrollIndicator={false}
        nestedScrollEnabled={true}
      >
        {FOUNDERS.map((founder) => (
          <BusinessFounderCard
            name={founder.name}
            imagePath={founder.imagePath}
            id={founder.id}
            key={founder.id}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  scrollContent: {
    gap: 50,
  },
});
