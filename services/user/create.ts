import { supabase } from "../supabase";

export interface UserData {
  email: string;
  name: string;
  bio: string;
}

export interface UserImageData {
  file: File;
}

export interface UserResponse {
  success: boolean;
  error?: string;
  data?: any;
}

export const createUser = async (userData: UserData): Promise<UserResponse> => {
  const response = await supabase.from("users").insert({
    email: userData.email,
    name: userData.name,
    bio: userData.bio,
  });

  if (response.error) {
    return { success: false, error: response.error.message };
  }

  return { success: true };
};

export const createUserProfileImage = async (
  imageData: UserImageData
): Promise<UserResponse> => {
  const { file } = imageData;
  const { data, error } = await supabase.storage
    .from("profile-pictures")
    .upload(`public/${file.name}`, file, {
      cacheControl: "3600",
      upsert: false,
    });

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true, data: data };
};
