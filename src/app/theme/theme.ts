import { scale, verticalScale } from '@utils';
import { ViewStyle } from 'react-native';

// Core design system
export const theme = {
  color: {
    white: '#FFFFFF',
    black: '#000000',
    lightShadow: '#0000000F',
    lightGray: '#E5E5E5',
    green: '#1AAF31',
    cyan: '#00CEFF',
    offWhite: '#F5F5F5',
    shadowGray: '#00000029',
    subTextGray: '#909090',
    transparentBlack: '#00000080',
  },
  spacing: {
    xs: scale(4),
    sm: scale(8),
    md: scale(16),
    lg: scale(24),
    xl: scale(32),
  },
  font: {
    regular: 'Rubik-Regular',
    italic: 'Rubik-Italic',
    bold: 'Rubik-Bold',
    medium: 'Rubik-Medium',
    size: {
      xs: verticalScale(12),
      sm: verticalScale(14),
      md: verticalScale(16),
      lg: verticalScale(20),
      xl: verticalScale(24),
    },
  },
  shadow: {
    light: {
      shadowColor: '#00000029',
      shadowOffset: { width: 0, height: scale(2) },
      shadowOpacity: 0.1,
      shadowRadius: scale(4),
      elevation: 2,
    } as ViewStyle,
  },
};
