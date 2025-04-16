import { Platform } from "react-native";
import IOSTabBarBackground from "./TabBarBackground.ios";
import AndroidTabBarBackground from "./TabBarBackground.android";

const TabBarBackground =
  Platform.OS === "ios" ? IOSTabBarBackground : AndroidTabBarBackground;

export default TabBarBackground;
