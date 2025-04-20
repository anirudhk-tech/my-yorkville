import { DiscoverCardList } from "@/components/features/discover/DiscoverCardList";
import { DiscoverHeader } from "@/components/features/discover/DiscoverHeader";
import { DiscoverSearchBar } from "@/components/features/discover/DiscoverSearchBar";
import { DiscoverSearchLabels } from "@/components/features/discover/DiscoverSearchLabels";
import { Screen } from "@/components/ui/templates/Screen";
import { StyleSheet, View } from "react-native";

export default function DiscoverScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <DiscoverHeader />
        <DiscoverSearchBar />
        <DiscoverSearchLabels />
        <DiscoverCardList />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
});
