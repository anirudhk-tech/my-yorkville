import { DiscoverCardList } from "@/components/features/discover/DiscoverCardList";
import { DiscoverHeader } from "@/components/features/discover/DiscoverHeader";
import { DiscoverSearchBar } from "@/components/features/discover/DiscoverSearchBar";
import { DiscoverSearchLabels } from "@/components/features/discover/DiscoverSearchLabels";
import { SafeAreaScreen } from "@/components/ui/templates/SafeAreaScreen";
import { StyleSheet, View } from "react-native";

export default function DiscoverScreen() {
  return (
    <SafeAreaScreen>
      <View style={styles.container}>
        <DiscoverHeader />
        <DiscoverSearchBar />
        <DiscoverSearchLabels />
        <DiscoverCardList />
      </View>
    </SafeAreaScreen>
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
