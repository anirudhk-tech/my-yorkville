import { Text } from "@/components/ui/atoms/Text";
import { SafeAreaScreen } from "@/components/ui/templates/SafeAreaScreen";
import { useSignup } from "@/hooks/features/auth/useSignup";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Touchable, TouchableOpacity, View } from "react-native";
import { Button, HelperText, TextInput, useTheme } from "react-native-paper";

export default function SignupScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const theme = useTheme();
  const router = useRouter();
  const { handleSignup, handleSignupWithGoogle, handleSignupWithApple, error } =
    useSignup();

  return (
    <SafeAreaScreen>
      <View style={styles.container}>
        <View style={styles.welcome}>
          <Text
            variant="titleLarge"
            style={{ color: theme.colors.onBackground, fontWeight: "bold" }}
          >
            Welcome to My Yorkville
          </Text>
          <Text
            variant="bodyLarge"
            style={{ color: theme.colors.onBackground }}
          >
            Find out what's happening in the neighborhood
          </Text>
        </View>
        <View style={styles.mainSignup}>
          <Text variant="titleLarge" style={{ fontWeight: "bold" }}>
            Sign up to Continue
          </Text>
          <HelperText
            type="error"
            visible={!!error}
            style={[styles.helperText, { display: error ? "flex" : "none" }]}
          >
            {error}
          </HelperText>
          <TextInput
            label="Email"
            mode="outlined"
            onChangeText={setEmail}
            placeholder="Enter your email"
            style={styles.input}
          />
          <TextInput
            label="Password"
            mode="outlined"
            onChangeText={setPassword}
            placeholder="Enter your password"
            secureTextEntry={true}
            style={styles.input}
          />
          <TouchableOpacity onPress={() => handleSignup({ email, password })}>
            <Button
              textColor={theme.colors.background}
              style={styles.button}
              mode="contained"
            >
              Signup
            </Button>
          </TouchableOpacity>
        </View>
        <View style={styles.orLine}>
          <View
            style={[
              styles.line,
              { backgroundColor: theme.colors.onBackground },
            ]}
          />
          <Text
            variant="bodyMedium"
            style={{ color: theme.colors.onBackground }}
          >
            OR
          </Text>
          <View
            style={[
              styles.line,
              { backgroundColor: theme.colors.onBackground },
            ]}
          />
        </View>
        <View style={styles.otherSignup}>
          <TouchableOpacity onPress={handleSignupWithGoogle}>
            <Button
              textColor={theme.colors.background}
              style={styles.button}
              mode="contained"
            >
              Signup With Google
            </Button>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSignupWithApple}>
            <Button
              textColor={theme.colors.background}
              style={styles.button}
              mode="contained"
            >
              Signup With Apple
            </Button>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => router.navigate("/(tabs)/LoginScreen")}
        >
          <Text variant="bodyMedium" style={styles.signupLink}>
            Already have an account?
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  welcome: {
    gap: 7,
  },
  input: {},
  mainSignup: {
    marginTop: 50,
    gap: 20,
  },
  orLine: {
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
    marginTop: 40,
  },
  line: {
    flex: 1,
    height: 1,
  },
  otherSignup: { marginTop: 40, gap: 30 },
  button: {
    borderRadius: 6,
  },
  signupLink: {
    textDecorationLine: "underline",
    textAlign: "center",
    marginTop: 30,
  },
  helperText: {
    paddingLeft: 0,
    fontSize: 16,
  },
});
