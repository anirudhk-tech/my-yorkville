import { Text } from "@/components/ui/atoms/Text";
import { SafeAreaScreen } from "@/components/ui/templates/SafeAreaScreen";
import { useBlurControl } from "@/hooks/shared/useBlurControl";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Touchable, TouchableOpacity, View } from "react-native";
import { Avatar, Button, Icon, TextInput } from "react-native-paper";

export default function CreateProfileScreen() {
  const router = useRouter();
  const [createBusiness, setCreateBusiness] = useState(false);
  const { inputRef: nameInputRef } = useBlurControl();
  const { inputRef: bioInputRef } = useBlurControl();

  const handleContinue = () => {
    if (createBusiness) {
      router.push("/onboarding/CreateBusinessScreen");
    } else {
      router.dismissAll();
      router.push("/(tabs)/DiscoverScreen");
    }
  };

  return (
    <SafeAreaScreen>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View style={styles.container}>
        <Text variant="titleLarge" style={styles.title}>
          Create your profile
        </Text>
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
            label="Display Name"
            mode="outlined"
            placeholder="This will be your public name"
            style={styles.input}
          />
          <TextInput
            ref={bioInputRef}
            label="Bio"
            mode="outlined"
            placeholder="Let people know about you"
            multiline={true}
            style={[styles.input, { minHeight: 200 }]}
          />
          <View style={styles.createBusinessFormContainer}>
            <TouchableOpacity
              onPress={() => setCreateBusiness((prev) => !prev)}
              style={styles.createBusinessCheckbox}
            >
              {createBusiness ? <Icon source={"check"} size={20} /> : null}
            </TouchableOpacity>
            <Text variant="bodyMedium">
              I'd also like to list my products/services on My Yorkville
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleContinue}>
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
  photoUploadAvatar: {
    alignSelf: "center",
  },
  button: {
    borderRadius: 6,
    marginTop: 20,
  },
  createBusinessFormContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginTop: 20,
  },
  createBusinessCheckbox: {
    borderWidth: 1,
    height: 20,
    aspectRatio: 1,
  },
});
