import { useEffect } from "react";
import { Linking } from "react-native";
import { useHandleAuthDeepLink } from "../features/auth/useHandleAuthDeepLink";
import { useRouter } from "expo-router";

export const useDeepLink = () => {
  const { handleAuthDeepLink } = useHandleAuthDeepLink();
  const router = useRouter();

  useEffect(() => {
    const handleDeepLink = async (event: any) => {
      const url = event.url;
      console.log("Received deep link:", url);
      if (url && url.startsWith("myyorkville://callback/auth/google")) {
        const response = await handleAuthDeepLink(url);
        if (response.success) router.navigate("/(tabs)/DiscoverScreen");
      } else if (url && url.startsWith("myyorkville://callback/auth/apple")) {
        const response = await handleAuthDeepLink(url);
        if (response.success) router.navigate("/(tabs)/DiscoverScreen");
      }
    };

    const subscription = Linking.addEventListener("url", handleDeepLink);

    (async () => {
      const initialUrl = await Linking.getInitialURL();
      if (initialUrl) {
        handleDeepLink({ url: initialUrl });
      }
    })();

    return () => {
      subscription.remove();
    };
  }, []);
};
