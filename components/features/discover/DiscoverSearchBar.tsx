import { SearchBar } from "@/components/ui/molecules/SearchBar";
import { StyleSheet } from "react-native";

export const DiscoverSearchBar = () => {
  const onSearch = () => {};
  const placeholder = "Search for anything...";

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
