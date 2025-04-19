import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

import { IconSymbol } from "@/components/ui/atoms/IconSymbol";
import TabBarBackground from "@/components/ui/molecules/navigation/TabBarBackground";
import { useTheme } from "react-native-paper";

export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        headerShown: false,
        tabBarBackground: () => <TabBarBackground />,
        tabBarStyle: [styles.tabBar, { shadowColor: theme.colors.shadow }],
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Index",
          tabBarStyle: styles.noTabBar,
          tabBarItemStyle: styles.noTabBarItem,
        }}
      />
      <Tabs.Screen
        name="DiscoverScreen"
        options={{
          title: "Discover",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="magnifyingglass" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ChatsScreen"
        options={{
          title: "Chats",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="message.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="BusinessScreen"
        options={{
          title: "Business",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="dollarsign.circle" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="LoginScreen"
        options={{
          tabBarStyle: styles.noTabBar,
          tabBarItemStyle: styles.noTabBarItem,
          tabBarButton: () => null,
        }}
      />
      <Tabs.Screen
        name="SignupScreen"
        options={{
          tabBarStyle: styles.noTabBar,
          tabBarItemStyle: styles.noTabBarItem,
          tabBarButton: () => null,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 30,
    width: "70%",
    height: 70,
    borderRadius: 60,
    backgroundColor: "transparent",
    marginHorizontal: "15%",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 12 },
    shadowRadius: 28,
    paddingTop: 10,
    paddingBottom: 10,
    overflow: "hidden",
    borderTopWidth: 0,
    elevation: 0,
  },
  noTabBar: {
    display: "none",
  },
  noTabBarItem: {
    display: "none",
  },
});
