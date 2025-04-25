import { AuthError, Session, User } from "@supabase/supabase-js";
import { supabase } from "../supabase";

export interface SignupCredentials {
  email: string;
  password: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupResponse {
  user: User | null;
  session: Session | null;
  error: AuthError | null;
  success: boolean;
}

export interface LoginResponse {
  user: User | null;
  session: Session | null;
  error: AuthError | null;
  success: boolean;
}

export const signUpUser = async (
  credentials: SignupCredentials
): Promise<SignupResponse> => {
  try {
    const {
      data: { user, session },
      error,
    } = await supabase.auth.signUp({
      email: credentials.email,
      password: credentials.password,
    });

    if (error) {
      console.error(
        `Sign up failed in api with code ${error.code}: `,
        error.message
      );
      return { user: null, session: null, error, success: false };
    }

    console.log("User signed up successfully: ", user);
    return { user, session, error: null, success: true };
  } catch (error) {
    console.error("Error while signing up user: ", error);
    return { user: null, session: null, error: null, success: false };
  }
};

export const loginUser = async (
  credentials: LoginCredentials
): Promise<LoginResponse> => {
  try {
    const {
      data: { user, session },
      error,
    } = await supabase.auth.signInWithPassword({
      email: credentials.email,
      password: credentials.password,
    });

    if (error) {
      console.error(
        `Login failed in api with code ${error.code}: `,
        error.message
      );
      return { user: null, session: null, error, success: false };
    }

    console.log(`Login successful for user ${user?.email}`);
    return { user, session, error: null, success: true };
  } catch (error) {
    console.error("Error while logging in user: ", error);
    return { user: null, session: null, error: null, success: false };
  }
};
