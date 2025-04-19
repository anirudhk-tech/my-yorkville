import { SearchBar } from "@/components/ui/molecules/SearchBar";
import React from "react";
import { StyleSheet } from "react-native";

export const ChatsSearchBar: React.FC = () => {
  const onSearch = () => {};
  const placeholder = "Who do you want to talk to?";

  return (
    <SearchBar
      onSearch={onSearch}
      placeholder={placeholder}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
});
