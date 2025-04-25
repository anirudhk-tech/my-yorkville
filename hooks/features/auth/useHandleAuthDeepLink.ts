import { supabase } from "@/services/supabase";

export const useHandleAuthDeepLink = () => {
  const handleAuthDeepLink = async (url: string) => {
    const authFragment = url.split("#")[1];
    const params = new URLSearchParams(authFragment);

    const accessToken = params.get("access_token");
    const refreshToken = params.get("refresh_token");

    if (accessToken && refreshToken) {
      await supabase.auth.setSession({
        access_token: accessToken,
        refresh_token: refreshToken,
      });
    }
  };

  return { handleAuthDeepLink };
};
