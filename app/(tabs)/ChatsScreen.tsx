import { ChatsCardList } from "@/components/features/chats/ChatsCardList";
import { ChatsHeader } from "@/components/features/chats/ChatsHeader";
import { ChatsSearchBar } from "@/components/features/chats/ChatsSearchBar";
import { Screen } from "@/components/ui/templates/Screen";
import { StyleSheet, View } from "react-native";

export default function ChatsScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <ChatsHeader />
        <ChatsSearchBar />
        <ChatsCardList />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },
});
