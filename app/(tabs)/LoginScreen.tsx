import { Text } from "@/components/ui/atoms/Text";
import { SafeAreaScreen } from "@/components/ui/templates/SafeAreaScreen";
import { useLogin } from "@/hooks/features/auth/useLogin";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Button, HelperText, TextInput, useTheme } from "react-native-paper";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const theme = useTheme();
  const router = useRouter();

  const { handleLogin, handleLoginWithGoogle, handleLoginWithApple, error } =
    useLogin();

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
        <View style={styles.mainLogin}>
          <Text variant="titleLarge" style={{ fontWeight: "bold" }}>
            Log in to Continue
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
          <TouchableOpacity onPress={() => handleLogin({ email, password })}>
            <Button
              textColor={theme.colors.background}
              style={[
                styles.button,
                { backgroundColor: theme.colors.onBackground },
              ]}
              mode="contained"
            >
              Login
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
        <View style={styles.otherLogin}>
          <TouchableOpacity onPress={handleLoginWithGoogle}>
            <Button
              textColor={theme.colors.background}
              style={[
                styles.button,
                { backgroundColor: theme.colors.onBackground },
              ]}
              mode="contained"
            >
              Login With Google
            </Button>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLoginWithApple}>
            <Button
              textColor={theme.colors.background}
              style={[
                styles.button,
                { backgroundColor: theme.colors.onBackground },
              ]}
              mode="contained"
            >
              Login With Apple
            </Button>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => router.navigate("/(tabs)/SignupScreen")}
        >
          <Text variant="bodyMedium" style={styles.signupLink}>
            Don't have an account?
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
  mainLogin: {
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
  otherLogin: { marginTop: 40, gap: 30 },
  button: {
    borderRadius: 6,
  },
  signupLink: {
    textDecorationLine: "underline",
    textAlign: "center",
    marginTop: 30,
  },
  helperText: {
    fontSize: 16,
    paddingLeft: 0,
  },
});
