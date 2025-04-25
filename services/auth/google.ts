import { AuthError } from "@supabase/supabase-js";
import { Linking } from "react-native";
import { supabase } from "../supabase";

export interface RedirectResponse {
  success: boolean;
  error: AuthError | null;
}
export const authenticateUserWithGoogle =
  async (): Promise<RedirectResponse> => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: "myyorkville://callback/auth/google",
        },
      });

      if (error) {
        console.error(
          `Login with Google failed in api with code ${error.code}: `,
          error.message
        );
        return { success: false, error };
      } else {
        if (data.url) {
          console.log("Redirecting user to google url: ", data.url);
          await Linking.openURL(data.url);
          return { success: true, error: null };
        }

        console.error("No URL returned from Google login: ", data);
        return { success: false, error: null };
      }
    } catch (error) {
      console.error("Error while logging user in with google: ", error);
      return { success: false, error: null };
    }
  };
