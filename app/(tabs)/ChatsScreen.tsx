import { ChatsCardList } from "@/components/features/chats/ChatsCardList";
import { ChatsHeader } from "@/components/features/chats/ChatsHeader";
import { ChatsSearchBar } from "@/components/features/chats/ChatsSearchBar";
import { SafeAreaScreen } from "@/components/ui/templates/SafeAreaScreen";
import { StyleSheet, View } from "react-native";

export default function ChatsScreen() {
  return (
    <SafeAreaScreen>
      <View style={styles.container}>
        <ChatsHeader />
        <ChatsSearchBar />
        <ChatsCardList />
      </View>
    </SafeAreaScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
});
