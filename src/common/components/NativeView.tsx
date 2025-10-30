import React, { useMemo } from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';
import { useAppTheme } from '@hooks';
import { ITheme } from '@types';

interface NativeViewProps extends ViewProps {
  padding?: keyof ITheme['spacing'];
  ph?: keyof ITheme['spacing'];
  pv?: keyof ITheme['spacing'];
  ml?: keyof ITheme['spacing'];
  mr?: keyof ITheme['spacing'];
  mt?: keyof ITheme['spacing'];
  mb?: keyof ITheme['spacing'];
  margin?: keyof ITheme['spacing'];
  backgroundColor?: keyof ITheme['color'];
  shadow?: boolean;
  borderRadius?: keyof ITheme['spacing'];
  flex?: number;
  wrap?: boolean;
  justifyContent?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
}

const NativeView: React.FC<NativeViewProps> = ({
  children,
  padding,
  margin,
  mb,
  mt,
  ml,
  mr,
  pv,
  ph,
  wrap,
  shadow = false,
  borderRadius,
  justifyContent,
  alignItems,
  flex,
  backgroundColor,
  flexDirection,
  style,
  ...props
}) => {
  const theme = useAppTheme();

  const viewStyle = useMemo(
    () =>
      StyleSheet.create({
        container: {
          ...(wrap ? { flexWrap: 'wrap' } : {}),
          ...(flexDirection && { flexDirection }),
          ...(borderRadius && { borderRadius: theme.spacing[borderRadius] }), // borderRadius can be a number()
          ...(ph && { paddingHorizontal: theme.spacing[ph] }),
          ...(pv && { paddingVertical: theme.spacing[pv] }),
          ...(ml && { marginLeft: theme.spacing[ml] }),
          ...(mr && { marginRight: theme.spacing[mr] }),
          ...(mt && { marginTop: theme.spacing[mt] }),
          ...(mb && { marginBottom: theme.spacing[mb] }),
          ...(flex && { flex }),
          ...(padding && { padding: theme.spacing[padding] }),
          ...(margin && { margin: theme.spacing[margin] }),
          ...(justifyContent && { justifyContent }),
          ...(alignItems && { alignItems }),
          ...(backgroundColor && {
            backgroundColor: theme.color[backgroundColor],
          }),
          ...(shadow ? theme.shadow.light : {}),
          
        },
      }),
    [
      theme,
      wrap,
      pv,
      ph,
      flexDirection,
      backgroundColor,
      padding,
      margin,
      shadow,
      borderRadius,
      justifyContent,
      alignItems,
      flex,
      ml,
      mr,
      mt,
      mb,
    ],
  );

  return (
    <View style={[viewStyle.container, style]} {...props}>
      {children}
    </View>
  );
};

export default NativeView;
