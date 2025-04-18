import { View, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";
import { useTheme } from "react-native-paper";

export default function TabBarBackground() {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.innerBackground,
        { backgroundColor: theme.colors.surface },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  shadowWrapper: {
    ...StyleSheet.absoluteFillObject,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
  },
  innerBackground: {
    flex: 1,
    height: 60,
    borderRadius: 60,
    overflow: "hidden",
  },
});
