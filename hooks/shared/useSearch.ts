import { useState, useCallback, useEffect, useRef } from "react";
import { useDebouncedCallback } from "./useDebounceCallback";
export interface UseSearchResult {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  cancel: () => void;
  flush: () => void;
}

export function useSearch(
  onSearch: (q: string) => void,
  { debounceMs = 300 } = {}
): UseSearchResult {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const doSearch = useCallback(() => {
    setLoading(true);
    onSearch(query);
    setLoading(false);
  }, [onSearch, query]);

  const debounced = useDebouncedCallback(doSearch, debounceMs);

  useEffect(() => {
    if (query !== "") debounced();
    return () => {
      debounced.cancel();
    };
  }, [query, debounced]);

  const cancel = useCallback(() => {
    debounced.cancel();
    setQuery("");
  }, [debounced]);

  const flush = useCallback(() => {
    debounced.flush();
    setLoading(false);
  }, [debounced]);

  return { query, setQuery, loading, cancel, flush };
}
