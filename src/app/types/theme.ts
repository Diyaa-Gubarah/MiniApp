import { ViewStyle } from 'react-native';

export interface ITheme {
  color: {
    white: string;
    black: string;
    lightShadow: string;
    lightGray: string;
    green: string;
    cyan: string;
    offWhite: string;
    shadowGray: string;
    subTextGray: string;
    transparentBlack: string;
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  font: {
    regular: string;
    italic: string;
    bold: string;
    medium: string;
    size: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
  };
  shadow: {
    light: ViewStyle;
  };
}

// Context type
export interface ThemeContextProps {
  theme: ITheme;
}
