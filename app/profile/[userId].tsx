import { ProfileHeader } from "@/components/features/profile/ProfileHeader";
import { BottomSafeAreaScreen } from "@/components/ui/templates/BottomSafeAreaScreen";
import { Stack } from "expo-router";
import { ScrollView, StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";

export default function ProfileScreen() {
  const theme = useTheme();

  return (
    <BottomSafeAreaScreen>
      <Stack.Screen
        options={{
          title: "Profile",
          headerTitleAlign: "center",
          headerTintColor: theme.colors.onBackground,
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
        }}
      />
      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          { backgroundColor: theme.colors.background },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <ProfileHeader />
      </ScrollView>
    </BottomSafeAreaScreen>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    alignItems: "center",
  },
});
