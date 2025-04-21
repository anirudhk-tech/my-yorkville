import { List } from "@/components/ui/molecules/List";
import React from "react";
import { ChatsChat, ChatsChatProps } from "./ChatsChat";
import { StyleSheet } from "react-native";

export const ChatsChatList: React.FC = () => {
  const CHATS = [
    {
      userId: "2",
      recipientName: "Anirudh Kuppili",
      content:
        "Hey Joe! Did you get a chance to look at the new UI mockups I sent?",
    },
    {
      userId: "1",
      recipientName: "Some Joe",
      content:
        "Hey Joe, yep—I checked them out this morning. Love the color palette, but the header feels a bit cramped.",
    },
    {
      userId: "2",
      recipientName: "Anirudh Kuppili",
      content:
        "Got it! I’ll bump the top padding from 12 → 20 and resend. Does that sound good?",
    },
    {
      userId: "1",
      recipientName: "Some Joe",
      content:
        "Perfect. Also, could you swap in the new logo SVG? The old PNG looks fuzzy on retina screens.",
    },
    {
      userId: "2",
      recipientName: "Anirudh Kuppili",
      content: "On it. Give me 10 mins and I’ll ping you the updated assets.",
    },
    {
      userId: "1",
      recipientName: "Some Joe",
      content:
        "Awesome, thanks! Once that’s in, let’s demo it to the team at 2 PM today.",
    },
    {
      userId: "2",
      recipientName: "Anirudh Kuppili",
      content:
        "Sounds like a plan. See you in the design channel in a bit 🎨👍",
    },
  ];

  const renderItem = ({ item }: { item: ChatsChatProps }) => {
    return (
      <ChatsChat
        userId={item.userId}
        recipientName={item.recipientName}
        content={item.content}
      />
    );
  };

  const keyExtractor = (item: ChatsChatProps) => `${item.content}`;

  return (
    <List
      contentContainerStyle={styles.content}
      data={CHATS}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  content: { paddingBottom: 40 },
});
