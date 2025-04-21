import { Text } from "@/components/ui/atoms/Text";
import React from "react";
import { StyleSheet } from "react-native";
import { Card } from "react-native-paper";

export interface ChatsChatProps {
  userId: string;
  recipientName: string;
  content: string;
}
export const ChatsChat: React.FC<ChatsChatProps> = ({
  userId,
  recipientName,
  content,
}) => {
  return (
    <Card
      mode="contained"
      style={[
        styles.container,
        { alignSelf: userId === "1" ? "flex-end" : "flex-start" },
      ]}
    >
      <Card.Content style={styles.content}>
        <Text variant="titleMedium" style={{ fontWeight: "bold" }}>
          {userId === "1" ? "You" : recipientName}
        </Text>
        <Text variant="bodyMedium" style={{ marginTop: 5 }}>
          {content}
        </Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 40,
    minWidth: "40%",
    maxWidth: "80%",
  },
  content: {
    padding: 10,
  },
});
