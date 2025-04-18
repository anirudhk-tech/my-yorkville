import { useRef, useCallback, useEffect } from "react";

type DebouncedCallback<T extends (...args: any[]) => any> = {
  (...args: Parameters<T>): void;
  cancel(): void;
  flush(): void;
};

export function useDebouncedCallback<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): DebouncedCallback<T> {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastArgs = useRef<Parameters<T> | null>(null);
  const fnRef = useRef<T>(fn);

  useEffect(() => {
    fnRef.current = fn;
  }, [fn]);

  const debounced = useCallback(
    (...args: Parameters<T>) => {
      lastArgs.current = args;
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => {
        fnRef.current(...(lastArgs.current as Parameters<T>));
        timerRef.current = null;
      }, delay);
    },
    [delay]
  ) as DebouncedCallback<T>;

  debounced.cancel = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  debounced.flush = () => {
    if (timerRef.current && lastArgs.current) {
      clearTimeout(timerRef.current);
      fnRef.current(...lastArgs.current);
      timerRef.current = null;
    }
  };

  return debounced;
}
