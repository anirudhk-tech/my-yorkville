import { SafeAreaScreen } from "@/components/ui/templates/SafeAreaScreen";
import { useBlurControl } from "@/hooks/shared/useBlurControl";
import { Stack, useRouter } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Avatar, Button, Text, TextInput } from "react-native-paper";

export default function CreateBusinessScreen() {
  const { inputRef: nameInputRef } = useBlurControl();
  const { inputRef: descInputRef } = useBlurControl();
  const router = useRouter();

  return (
    <SafeAreaScreen>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text variant="titleLarge" style={styles.title}>
            Create your selling profile
          </Text>
          <TouchableOpacity
            onPress={() => router.push("/(tabs)/DiscoverScreen")}
          >
            <Text variant="bodyMedium" style={styles.skipForNow}>
              Skip for now
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Avatar.Icon
            style={styles.photoUploadAvatar}
            icon="camera"
            size={100}
          />
        </TouchableOpacity>
        <View style={styles.formContainer}>
          <TextInput
            ref={nameInputRef}
            label="Business Name"
            mode="outlined"
            placeholder="Enter your business name"
            style={styles.input}
          />
          <TextInput
            ref={descInputRef}
            label="Business Description"
            mode="outlined"
            placeholder="Enter a description of your business"
            multiline={true}
            style={[styles.input, { minHeight: 200 }]}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/(tabs)/BusinessScreen")}
        >
          <Button mode="contained" style={styles.button}>
            Create
          </Button>
        </TouchableOpacity>
      </View>
    </SafeAreaScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 15,
    gap: 40,
  },
  title: {
    fontWeight: "bold",
  },
  formContainer: {
    gap: 20,
  },
  input: {},
  button: {
    borderRadius: 6,
    marginTop: 20,
  },
  photoUploadAvatar: {
    alignSelf: "center",
  },
  skipForNow: {
    textDecorationLine: "underline",
  },
  titleContainer: {
    gap: 10,
  },
});
