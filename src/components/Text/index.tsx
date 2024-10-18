// learn more about the usage of custom Fonts
// https://medium.com/@malikchohra/build-for-scale-use-custom-fonts-in-react-native-5cae05ee1a99

import {useAppTheme} from '~/container/AppThemeProvider';
import * as React from 'react';
import {ColorValue, StyleProp, TextProps, TextStyle} from 'react-native';
import {Text} from 'react-native-paper';

interface StyledTextProps extends TextProps {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  p?: boolean;
  small?: boolean;
  bold?: boolean;
  title?: string;
  textColor?: ColorValue;
  style?: StyleProp<TextStyle>;
  children?: React.ReactNode;
}

const StyledText: React.FC<StyledTextProps> = ({
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  bold,
  title = '',
  style,
  textColor,
  small,
  children,
  ...props
}) => {
  const theme = useAppTheme();
  return (
    <Text
      style={[
        h1 && theme.fonts.headlineLarge,
        h2 && theme.fonts.headlineSmall,
        h3 && theme.fonts.titleLarge,
        h4 && theme.fonts.titleSmall,
        h5 && theme.fonts.labelLarge,
        p && theme.fonts.labelSmall,
        small && theme.fonts.bodyMedium,
        bold && theme.fonts.bodyLarge,
        {color: textColor || theme.colors.text},
        style,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

export default StyledText;
