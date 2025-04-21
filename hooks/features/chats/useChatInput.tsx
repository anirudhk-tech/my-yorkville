import { useState } from "react";

export const useChatInput = () => {
  const [text, setText] = useState<string>("");

  return { text, setText };
};
