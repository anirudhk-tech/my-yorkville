import { Text } from "@/components/ui/atoms/Text";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Card, useTheme } from "react-native-paper";

interface ChatsCardProps {
  recipientName: string;
  recipientImage: string;
  lastMessage: string;
  lastMessageTime: string;
}

export const ChatsCard: React.FC<ChatsCardProps> = ({
  recipientImage,
  recipientName,
  lastMessage,
  lastMessageTime,
}) => {
  const theme = useTheme();
  return (
    <Card mode="contained">
      <Card.Content style={styles.container}>
        <Avatar.Image source={{ uri: recipientImage }} size={50} />
        <View style={styles.textContainer}>
          <Card.Title
            title={recipientName}
            subtitle={lastMessage}
            titleStyle={[styles.title, { color: theme.colors.onSurface }]}
            subtitleStyle={[
              styles.subTitle,
              { color: theme.colors.onSurfaceVariant },
            ]}
          />
        </View>
        <Text style={styles.lastMessageTime} variant="bodySmall">
          {lastMessageTime}
        </Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  textContainer: { flexGrow: 1 },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 14,
  },
  lastMessageTime: {
    fontSize: 12,
    position: "absolute",
    top: 20,
    right: 20,
  },
});
