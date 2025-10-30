import React, { useMemo } from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
} from 'react-native';
import { useAppTheme } from '@hooks';
import { ITheme } from '@types';

interface NativeButtonProps extends TouchableOpacityProps {
  color?: keyof ITheme['color'];
  ph?: keyof ITheme['spacing'];
  pv?: keyof ITheme['spacing'];
  ml?: keyof ITheme['spacing'];
  mr?: keyof ITheme['spacing'];
  mb?: keyof ITheme['spacing'];
  mt?: keyof ITheme['spacing'];
  borderRadius?: keyof ITheme['spacing'];
  flex?: boolean;
}

const NativeButton: React.FC<NativeButtonProps> = ({
  children,
  color = 'green',
  borderRadius,
  ph,
  pv,
  mt,
  mb,
  ml,
  mr,
  flex,
  style,
  ...props
}) => {
  const theme = useAppTheme();

  const buttonStyle = useMemo(
    () =>
      StyleSheet.create({
        button: {
          overflow: 'hidden',
          backgroundColor: theme.color[color],
          ...(flex && { flex: 1 }),
          ...(ph && { paddingHorizontal: theme.spacing[ph] }),
          ...(pv && { paddingVertical: theme.spacing[pv] }),
          ...(mt && { marginTop: theme.spacing[mt] }),
          ...(mb && { marginBottom: theme.spacing[mb] }),
          ...(ml && { marginLeft: theme.spacing[ml] }),
          ...(mr && { marginRight: theme.spacing[mr] }),
          ...(borderRadius && { borderRadius: theme.spacing[borderRadius] }), // borderRadius can be a number()
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        },
      }),
    [theme, flex, color, ph, pv, mt, mb, ml, mr, borderRadius],
  );

  return (
    <TouchableOpacity style={[buttonStyle.button, style]} {...props}>
      {children}
    </TouchableOpacity>
  );
};

export default NativeButton;
