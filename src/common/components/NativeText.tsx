import { useAppTheme } from '@hooks';
import { ITheme } from '@types';
import React, { useMemo } from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

interface NativeTextProps extends TextProps {
  color?: keyof ITheme['color'];
  size?: keyof ITheme['font']['size'];
  family?: Exclude<keyof ITheme['font'], 'size'>;
  align?: 'left' | 'center' | 'right' | 'justify';
  ml?: keyof ITheme['spacing'];
  mr?: keyof ITheme['spacing'];
  mt?: keyof ITheme['spacing'];
  mb?: keyof ITheme['spacing'];
  trim?: boolean;
}

const NativeText: React.FC<NativeTextProps> = ({
  children,
  color = 'black',
  size = 'sm',
  family = 'regular',
  align = 'left',
  mb,
  mr,
  ml,
  mt,
  trim,
  style,
  numberOfLines: _numberOfLines,
  ellipsizeMode: _ellipsizeMode,
  ...props
}) => {
  const theme = useAppTheme();

  const textStyle = useMemo(
    () =>
      StyleSheet.create({
        text: {
          color: theme.color[color],
          fontSize: theme.font.size[size],
          fontFamily: theme.font[family],
          textAlign: align,
          ...(mb && { marginBottom: theme.spacing[mb] }),
          ...(mt && { marginTop: theme.spacing[mt] }),
          ...(ml && { marginLeft: theme.spacing[ml] }),
          ...(mr && { marginRight: theme.spacing[mr] }),
        },
      }),
    [theme, color, size, family, align, mb, mt, ml, mr],
  );

  const finalNumberOfLines = useMemo(() => (trim ? 1 : undefined), [trim]);
  const finalEllipsizeMode: TextProps['ellipsizeMode'] = useMemo(
    () => (trim ? 'tail' : undefined),
    [trim],
  );

  return (
    <Text
      allowFontScaling={false}
      style={[textStyle.text, style]}
      numberOfLines={finalNumberOfLines}
      ellipsizeMode={finalEllipsizeMode}
      {...props}
    >
      {children}
    </Text>
  );
};

export default NativeText;
