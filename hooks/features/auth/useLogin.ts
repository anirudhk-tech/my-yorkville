import { LoginCredentials, loginUser } from "@/services/auth/main";
import { authenticateUserWithGoogle } from "@/services/auth/google";
import { useRouter } from "expo-router";
import { useState } from "react";
import { authenticateUserWithApple } from "@/services/auth/apple";

export const useLogin = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (credentials: LoginCredentials) => {
    try {
      const response = await loginUser(credentials);
      if (response.success) {
        router.navigate("/(tabs)/DiscoverScreen");
      } else {
        console.error(
          `Login failed in api with code ${response.error?.code}: `,
          response.error
        );

        switch (response.error?.code) {
          case "validation_failed":
            setError("Please enter an email and password.");
            break;
          case "invalid_credentials":
            setError(
              "We couldn't log you in. Please double check credentials."
            );
            break;
          default:
            setError("An unknown error occurred. Please try again.");
            break;
        }
      }
    } catch (error) {
      console.error("Error during login in hook: ", error);
      return { user: null, session: null, error: null, success: false };
    }
  };

  const handleLoginWithGoogle = async () => {
    try {
      const response = await authenticateUserWithGoogle();

      if (!response.success) {
        console.error(
          `Login failed in api with code ${response.error?.code}: `,
          response.error
        );
        setError("An unknown error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Error during login in hook: ", error);
      return { user: null, session: null, error: null, success: false };
    }
  };

  const handleLoginWithApple = async () => {
    try {
      const response = await authenticateUserWithApple();

      if (!response.success) {
        console.error(
          `Login failed in api with code ${response.error?.code}: `,
          response.error
        );
        setError("An unknown error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Error during login in hook: ", error);
      return { user: null, session: null, error: null, success: false };
    }
  };

  return { handleLogin, error, handleLoginWithGoogle, handleLoginWithApple };
};
