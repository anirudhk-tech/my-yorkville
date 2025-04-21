import { ChatsChatInput } from "@/components/features/chats/ChatsChatInput";
import { ChatsChatList } from "@/components/features/chats/ChatsChatList";
import { Screen } from "@/components/ui/templates/Screen";
import { StackedScreen } from "@/components/ui/templates/StackedScreen";
import { Stack } from "expo-router";
import React from "react";
import { useTheme } from "react-native-paper";

export default function ChatScreen() {
  const theme = useTheme();

  return (
    <StackedScreen>
      <Stack.Screen
        options={{
          title: "Anirudh Kuppili",
          headerTitleAlign: "center",
          headerTintColor: theme.colors.onBackground,
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
          headerBackTitle: "Chats",
        }}
      />
      <ChatsChatList />
      <ChatsChatInput />
    </StackedScreen>
  );
}
