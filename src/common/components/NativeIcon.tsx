import { ITheme } from '@types';
import { verticalScale } from '@utils';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

// derive icon name union from the icon's glyph map
type ICON_NAME =
  | 'add'
  | 'arrow-back'
  | 'search'
  | 'favorite'
  | 'keyboard-arrow-up'
  | 'keyboard-arrow-down'
  | 'close'
  | 'store'
  | 'favorite-border';

type Props = {
  name: ICON_NAME;
  size?: 12 | 14 | 16 | 18 | 20 | 24 | 28 | 32 | 36 | 40;
  color?: keyof ITheme['color'];
};

const NativeIcon = ({ name, size = 24, color = 'black' }: Props) => {
  return <Icon name={name} size={verticalScale(size)} color={String(color)} />;
};

export default NativeIcon;
