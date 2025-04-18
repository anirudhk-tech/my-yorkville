import { useState, useCallback, useEffect, useRef } from "react";
import { useDebouncedCallback } from "./useDebounceCallback";
import { Keyboard, TextInput } from "react-native";
import { Searchbar } from "react-native-paper";

type SearchBarRef = React.ComponentRef<typeof Searchbar>;

export interface UseSearchResult {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  cancel: () => void;
  flush: () => void;
  searchBarRef: React.RefObject<SearchBarRef>;
}

export function useSearch(
  onSearch: (q: string) => void,
  { debounceMs = 300 } = {}
): UseSearchResult {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const searchBarRef = useRef<SearchBarRef>(null);

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

  useEffect(() => {
    const hideListener = Keyboard.addListener("keyboardDidHide", () => {
      if (searchBarRef.current) {
        searchBarRef.current.blur();
      }
    });

    return () => {
      hideListener.remove();
    };
  }, []);

  const cancel = useCallback(() => {
    debounced.cancel();
    setQuery("");
  }, [debounced]);

  const flush = useCallback(() => {
    debounced.flush();
    setLoading(false);
  }, [debounced]);

  return { query, setQuery, loading, cancel, flush, searchBarRef };
}
