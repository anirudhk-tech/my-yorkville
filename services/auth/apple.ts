import { AuthError } from "@supabase/supabase-js";
import { Linking } from "react-native";
import { supabase } from "../supabase";

export interface RedirectResponse {
  success: boolean;
  error: AuthError | null;
}
export const authenticateUserWithApple =
  async (): Promise<RedirectResponse> => {
    try {
      console.log("Authenticating user with Apple...");

      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "apple",
        options: {
          redirectTo: "myyorkville://callback/auth/apple",
        },
      });

      if (error) {
        console.error(
          `Login with Apple failed in api with code ${error.code}: `,
          error.message
        );
        return { success: false, error };
      } else {
        if (data.url) {
          console.log("Redirecting user to apple url: ", data.url);
          await Linking.openURL(data.url);
          return { success: true, error: null };
        }

        console.error("No URL returned from Apple login: ", data);
        return { success: false, error: null };
      }
    } catch (error) {
      console.error("Error while logging user in with apple: ", error);
      return { success: false, error: null };
    }
  };
