import { FlatList, StyleSheet } from "react-native";
import { ChatsCard } from "./ChatsCard";
import React, { useCallback } from "react";
import { List } from "@/components/ui/molecules/List";

export interface ChatsCardData {
  id: number;
  recipientName: string;
  recipientImage: string;
  lastMessage: string;
  lastMessageTime: string;
}

export const ChatsCardList: React.FC = () => {
  const renderItem = useCallback(
    ({ item }: { item: ChatsCardData }) => (
      <ChatsCard
        recipientName={item.recipientName}
        recipientImage={item.recipientImage}
        lastMessage={item.lastMessage}
        lastMessageTime={item.lastMessageTime}
      />
    ),
    []
  );

  const keyExtractor = useCallback(
    (item: ChatsCardData) => item.id.toString(),
    []
  );

  return (
    <List
      style={styles.container}
      contentContainerStyle={styles.content}
      data={[
        {
          id: 1,
          recipientName: "Anirudh Kuppili",
          recipientImage:
            "https://static.vecteezy.com/system/resources/thumbnails/053/180/599/small/futuristic-cyberpunk-character-in-neon-lit-city-free-photo.jpg",
          lastMessage: "Hey, how are you?",
          lastMessageTime: "2m ago",
        },
      ]}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};

const styles = StyleSheet.create({
  container: { flexGrow: 1, marginTop: 10 },
  content: {
    flexGrow: 1,
  },
});
