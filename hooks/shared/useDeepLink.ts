import { useEffect } from "react";
import { Linking } from "react-native";
import { useHandleAuthDeepLink } from "../features/auth/useHandleAuthDeepLink";

export const useDeepLink = () => {
  const { handleAuthDeepLink } = useHandleAuthDeepLink();

  useEffect(() => {
    const handleDeepLink = async (event: any) => {
      const url = event.url;
      if (url && url.startsWith("myyorkville://callback/auth/google")) {
        console.log("Google Auth callback received");
        await handleAuthDeepLink(url);
      } else if (url && url.startsWith("myyorkville://callback/auth/apple")) {
        console.log("Apple Auth callback received");
        await handleAuthDeepLink(url);
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
