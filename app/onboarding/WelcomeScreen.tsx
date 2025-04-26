import { Text } from "@/components/ui/atoms/Text";
import { SafeAreaScreen } from "@/components/ui/templates/SafeAreaScreen";
import { Stack, useRouter } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Button, Icon, useTheme } from "react-native-paper";

export default function WelcomeScreen() {
  const theme = useTheme();
  const router = useRouter();

  return (
    <SafeAreaScreen>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View style={styles.container}>
        <Text variant="titleLarge" style={styles.title}>
          How My Yorkville works
        </Text>
        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Icon
              source={"compass"}
              size={40}
              color={theme.colors.onBackground}
            />
            <View style={styles.infoTextContainer}>
              <Text variant="bodyLarge" style={styles.infoTitle}>
                Explore
              </Text>
              <Text variant="bodyLarge" style={styles.infoText}>
                What services and products local Yorkville people and businesses
                have to offer
              </Text>
            </View>
          </View>
          <View style={styles.infoRow}>
            <Icon
              source={"hand-coin"}
              size={40}
              color={theme.colors.onBackground}
            />
            <View style={styles.infoTextContainer}>
              <Text variant="bodyLarge" style={styles.infoTitle}>
                Sell
              </Text>
              <Text variant="bodyLarge" style={styles.infoText}>
                Your products and services by creating a business page
              </Text>
            </View>
          </View>
          <View style={styles.infoRow}>
            <Icon source={"chat"} size={40} color={theme.colors.onBackground} />
            <View style={styles.infoTextContainer}>
              <Text variant="bodyLarge" style={styles.infoTitle}>
                Chat
              </Text>
              <Text variant="bodyLarge" style={styles.infoText}>
                With other locals and businesses to get more information
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Button
            mode="contained"
            style={styles.button}
            onPress={() => router.push("/onboarding/CreateProfileScreen")}
          >
            Continue
          </Button>
        </TouchableOpacity>
      </View>
    </SafeAreaScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    gap: 40,
  },
  title: {
    fontWeight: "bold",
  },
  infoTextContainer: {
    flex: 1,
  },
  infoTitle: {
    fontWeight: "bold",
  },
  infoText: {},
  infoRow: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  infoContainer: {
    gap: 40,
  },
  button: {
    borderRadius: 6,
    marginTop: 20,
  },
});
