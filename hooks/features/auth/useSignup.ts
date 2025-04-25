import { authenticateUserWithApple } from "@/services/auth/apple";
import { authenticateUserWithGoogle } from "@/services/auth/google";
import { SignupCredentials, signUpUser } from "@/services/auth/main";
import { useRouter } from "expo-router";
import { useState } from "react";

export const useSignup = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleSignup = async (credentials: SignupCredentials) => {
    try {
      const response = await signUpUser(credentials);
      if (response.success) {
        router.navigate("/(tabs)/DiscoverScreen");
      } else {
        console.error(
          `Signup failed in api with code ${response.error?.code}: `,
          response.error
        );

        switch (response.error?.code) {
          case "anonymous_provider_disabled":
            setError("Please enter an email and password.");
            break;
          case "validation_failed":
            setError("Please enter an email and password.");
            break;
          case "email_taken":
            setError("Email already in use. Please try another one.");
            break;
          case "invalid_email":
            setError("Invalid email address. Please enter a valid one.");
            break;
          case "invalid_password":
            setError("Password must be at least 6 characters long.");
            break;
          case "weak_password":
            setError("Password must be at least 6 characters long.");
            break;
          default:
            setError("An unknown error occurred. Please try again.");
            break;
        }
      }
    } catch (error) {
      console.error("Error during signup in hook: ", error);
      return { user: null, session: null, error: null, success: false };
    }
  };

  const handleSignupWithGoogle = async () => {
    try {
      const response = await authenticateUserWithGoogle();

      if (!response.success) {
        console.error(
          `Signup failed in api with code ${response.error?.code}: `,
          response.error
        );
        setError("An unknown error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Error during signup in hook: ", error);
      return { user: null, session: null, error: null, success: false };
    }
  };

  const handleSignupWithApple = async () => {
    try {
      const response = await authenticateUserWithApple();

      if (!response.success) {
        console.error(
          `Signup failed in api with code ${response.error?.code}: `,
          response.error
        );
        setError("An unknown error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Error during signup in hook: ", error);
      return { user: null, session: null, error: null, success: false };
    }
  };
  return { handleSignup, handleSignupWithGoogle, handleSignupWithApple, error };
};
