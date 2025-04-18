import React from "react";
import { StyleProp, TextStyle } from "react-native";
import { Text as PaperText, useTheme } from "react-native-paper";

type TypographyVariant =
  | "titleLarge"
  | "titleMedium"
  | "titleSmall"
  | "bodyLarge"
  | "bodyMedium"
  | "bodySmall"
  | "labelLarge"
  | "labelMedium"
  | "labelSmall";

interface TextProps
  extends Omit<React.ComponentProps<typeof PaperText>, "variant"> {
  variant: TypographyVariant;
  style?: StyleProp<TextStyle>;
}

export const Text: React.FC<TextProps> = ({
  variant,
  style,
  children,
  ...props
}) => {
  const theme = useTheme();

  const variantStyles: Record<TypographyVariant, TextStyle> = {
    titleLarge: { ...theme.fonts.titleLarge, color: theme.colors.onSurface },
    titleMedium: { ...theme.fonts.titleMedium, color: theme.colors.onSurface },
    titleSmall: { ...theme.fonts.titleSmall, color: theme.colors.onSurface },

    bodyLarge: { ...theme.fonts.bodyLarge, color: theme.colors.onSurface },
    bodyMedium: { ...theme.fonts.bodyMedium, color: theme.colors.onSurface },
    bodySmall: { ...theme.fonts.bodySmall, color: theme.colors.onSurface },

    labelLarge: {
      ...theme.fonts.labelLarge,
      color: theme.colors.onSurfaceVariant,
    },
    labelMedium: {
      ...theme.fonts.labelMedium,
      color: theme.colors.onSurfaceVariant,
    },
    labelSmall: {
      ...theme.fonts.labelSmall,
      color: theme.colors.onSurfaceVariant,
    },
  };

  return (
    <PaperText style={[variantStyles[variant], style]} {...props}>
      {children}
    </PaperText>
  );
};
