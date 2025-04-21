import { useChatInput } from "@/hooks/features/chats/useChatInput";
import { useBlurControl } from "@/hooks/shared/useBlurControl";
import React from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, useTheme } from "react-native-paper";

export const ChatsChatInput: React.FC = () => {
  const { text, setText } = useChatInput();
  const theme = useTheme();
  const { inputRef: chatInputRef } = useBlurControl();

  return (
    <View style={styles.container}>
      <TextInput
        ref={chatInputRef}
        mode="outlined"
        contentStyle={styles.inputContent}
        placeholder="Type a message…"
        multiline
        value={text}
        onChangeText={setText}
        style={styles.input}
        outlineColor={theme.colors.surfaceVariant}
        activeOutlineColor={theme.colors.primary}
        right={
          <TextInput.Icon
            icon="send"
            disabled={!text.trim()}
            onPress={() => {}}
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 8,
    alignItems: "flex-end",
  },
  input: {
    flex: 1,
    backgroundColor: "transparent",
    marginRight: 8,
    maxHeight: 100,
  },
  inputContent: {
    textAlignVertical: "center",
  },
});
