import { ChatsChatInput } from "@/components/features/chats/ChatsChatInput";
import { ChatsChatList } from "@/components/features/chats/ChatsChatList";
import { BottomSafeAreaScreen } from "@/components/ui/templates/BottomSafeAreaScreen";
import { Stack } from "expo-router";
import React from "react";
import { useTheme } from "react-native-paper";

export default function ChatScreen() {
  const theme = useTheme();

  return (
    <BottomSafeAreaScreen>
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
    </BottomSafeAreaScreen>
  );
}
