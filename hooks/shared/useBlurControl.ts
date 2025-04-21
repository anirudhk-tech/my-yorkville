import { useEffect, useRef } from "react";
import { Keyboard } from "react-native";

export interface useBlurControlResult {
  inputRef: React.RefObject<any>;
}

export const useBlurControl = () => {
  const inputRef = useRef<any>(null);

  useEffect(() => {
    const hideListener = Keyboard.addListener("keyboardDidHide", () => {
      if (inputRef.current) {
        inputRef.current.blur();
      }
    });

    return () => {
      hideListener.remove();
    };
  }, []);

  return { inputRef };
};
