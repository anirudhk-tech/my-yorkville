import { Tabs } from "expo-router";
import React from "react";
import { Dimensions, Platform } from "react-native";

import { IconSymbol } from "@/components/common/IconSymbol";
import TabBarBackground from "@/components/common/TabBarBackground";
import { useTheme } from "react-native-paper";

export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        headerShown: false,
        tabBarBackground: () => <TabBarBackground />,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
            bottom: 30,
            width: "70%",
            height: 70,
            borderRadius: 60,
            backgroundColor: "transparent",
            marginHorizontal: "15%",
            shadowColor: "#000",
            shadowOpacity: 0.35,
            shadowOffset: { width: 0, height: 12 },
            shadowRadius: 28,
            paddingTop: 10,
            paddingBottom: 10,
          },
          default: {
            width: "70%",
            alignSelf: "center",
            bottom: 30,
            borderRadius: 60,
            height: 70,
            overflow: "hidden",
            paddingTop: 10,
            paddingBottom: 10,
          },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Index",
          tabBarStyle: { display: "none" },
          tabBarItemStyle: { display: "none" },
        }}
      />
      <Tabs.Screen
        name="HomeScreen"
        options={{
          title: "Discover",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="magnifyingglass" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="MessagesScreen"
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
          tabBarStyle: { display: "none" },
          tabBarItemStyle: { display: "none" },

          tabBarButton: () => null,
        }}
      />
      <Tabs.Screen
        name="SignupScreen"
        options={{
          tabBarStyle: { display: "none" },
          tabBarItemStyle: { display: "none" },

          tabBarButton: () => null,
        }}
      />
    </Tabs>
  );
}
