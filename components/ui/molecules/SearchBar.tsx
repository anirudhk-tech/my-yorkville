import { useBlurControl } from "@/hooks/shared/useBlurControl";
import { useSearch } from "@/hooks/shared/useSearch";
import React from "react";
import { Searchbar } from "react-native-paper";

type BaseProps = Omit<React.ComponentProps<typeof Searchbar>, "value">;

export interface SearchBarProps extends BaseProps {
  onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  onSearch,
  icon,
  style,
  inputStyle,
}) => {
  const { query, setQuery, loading } = useSearch(onSearch, {
    debounceMs: 500,
  });

  const { inputRef: searchBarRef } = useBlurControl();

  return (
    <Searchbar
      ref={searchBarRef}
      placeholder={placeholder}
      onChangeText={setQuery}
      value={query}
      loading={loading}
      icon={icon}
      style={style}
      inputStyle={inputStyle}
    />
  );
};
