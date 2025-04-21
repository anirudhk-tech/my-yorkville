import React, { useCallback } from "react";
import {
  FlatList,
  FlatListProps,
  ListRenderItem,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";

interface ListProps<T>
  extends Omit<FlatListProps<T>, "renderItem" | "data" | "keyExtractor"> {
  data: T[];
  keyExtractor: (item: T, index: number) => string;
  renderItem: ListRenderItem<T>;
  containerStyle?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
}

export const List = <T,>({
  data,
  keyExtractor,
  renderItem,
  containerStyle,
  contentContainerStyle,
  ...props
}: ListProps<T>) => {
  const memoizedRenderItem = useCallback(renderItem, [renderItem]);
  const memoizedKeyExtractor = useCallback(keyExtractor, [keyExtractor]);

  return (
    <FlatList
      {...props}
      style={[styles.container, containerStyle]}
      contentContainerStyle={[styles.content, contentContainerStyle]}
      data={data}
      renderItem={memoizedRenderItem}
      keyExtractor={memoizedKeyExtractor}
    />
  );
};

const styles = StyleSheet.create({
  container: { flexGrow: 1 },
  content: {
    flexGrow: 1,
  },
});
