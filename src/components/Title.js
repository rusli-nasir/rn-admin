import React from "react";
import { Text } from "react-native";
import color from "color";
import { useTheme } from "emotion-theming";

export const Title = props => {
  const style = props.style;
  const theme = useTheme();
  const textColor = color(theme.text)
    .alpha(0.87)
    .rgb()
    .string();
  return (
    <Text
      allowFontScaling={true}
      {...props}
      style={[
        style,
        {
          color: textColor,
          fontSize: 25,
          lineHeight: 30,
          marginVertical: 2,
          letterSpacing: 0.15
        }
      ]}
    />
  );
};
