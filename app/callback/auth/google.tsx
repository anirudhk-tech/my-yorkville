import { useRouter } from "expo-router";
import { useEffect } from "react";

export default function GoogleAuthCallback() {
  const router = useRouter();

  useEffect(() => router.dismiss(), []);
  return null;
}
