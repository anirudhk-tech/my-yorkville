import React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import {
  TouchableRipple,
  TouchableRippleProps,
  useTheme,
} from "react-native-paper";

interface RippleProps extends TouchableRippleProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

export const Ripple: React.FC<RippleProps> = ({
  children,
  style,
  contentStyle,
  ...rippleProps
}) => {
  const theme = useTheme();
  return (
    <View style={[styles.wrapper, style]}>
      <TouchableRipple
        {...rippleProps}
        style={[styles.ripple, contentStyle]}
        rippleColor={`${theme.colors.onSurface}2F`}
      >
        {children}
      </TouchableRipple>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    overflow: "hidden",
    borderRadius: 8,
  },
  ripple: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
