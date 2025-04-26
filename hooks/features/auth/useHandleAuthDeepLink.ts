import { supabase } from "@/services/supabase";

export interface AuthDeepLinkResponse {
  success: boolean;
  error: string | null;
}

export const useHandleAuthDeepLink = () => {
  const handleAuthDeepLink = async (
    url: string
  ): Promise<AuthDeepLinkResponse> => {
    const authFragment = url.split("#")[1];
    const params = new URLSearchParams(authFragment);

    const accessToken = params.get("access_token");
    const refreshToken = params.get("refresh_token");

    if (accessToken && refreshToken) {
      const { data, error } = await supabase.auth.setSession({
        access_token: accessToken,
        refresh_token: refreshToken,
      });

      if (error) {
        console.error("Error setting session: ", error);
        return { success: false, error: error.message };
      }

      console.log("Session set successfully: ", data);
      return { success: true, error: null };
    }

    return { success: false, error: "No access token or refresh token found" };
  };

  return { handleAuthDeepLink };
};
