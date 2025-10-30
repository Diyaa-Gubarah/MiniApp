import { NativeButton, NativeIcon, NativeText, NativeView } from '@components';
import { ITheme } from '@types';
import { scale } from '@utils';
import React from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';

type CardProps = {
  children?: React.ReactNode;
  style?: any;
};

export const Card: React.FC<CardProps> = ({ children, style }) => {
  const { width } = useWindowDimensions();
  const isLarge = width > 720;
  const flexBasis = isLarge ? '45%' : '44%';

  return (
    <NativeView margin="sm" style={[styles.card, { flexBasis }, style]}>
      {children}
    </NativeView>
  );
};

export const CardImageContainer: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => (
  <NativeView style={styles.cardImage}>{children}</NativeView>
);

export const CardBadge: React.FC<{
  title: string;
  backgroundColor?: keyof ITheme['color'];
}> = ({ title, backgroundColor }) => (
  <NativeView
    borderRadius="lg"
    ph="sm"
    pv="xs"
    backgroundColor={backgroundColor}
  >
    <NativeText trim size="xs" family="medium" style={styles.badgeText}>
      {title}
    </NativeText>
  </NativeView>
);

export const CardFavoriteButton: React.FC<{
  active?: boolean;
  onPress?: () => void;
  style?: any;
}> = ({ active, onPress }) => (
  <NativeButton
    color="white"
    ph="sm"
    pv="sm"
    borderRadius="lg"
    onPress={onPress}
  >
    {active ? (
      <NativeIcon name="favorite" size={12} color="green" />
    ) : (
      <NativeIcon name="favorite-border" size={12} color="black" />
    )}
  </NativeButton>
);

export const CardAddButton: React.FC<{ onPress?: () => void }> = ({
  onPress,
}) => (
  <NativeButton
    ph="sm"
    pv="sm"
    borderRadius="lg"
    style={[styles.addButton]}
    onPress={onPress}
  >
    <NativeIcon name="add" size={12} color="green" />
  </NativeButton>
);

const styles = StyleSheet.create({
  card: {
    flexGrow: 0,
    maxWidth: scale(320),
  },
  cardImage: {
    width: '100%',
    aspectRatio: 1,
  },
  badgeText:{fontSize: scale(8)},

  addButton: {
    borderWidth: scale(2),
    borderColor: '#E5E5E5',
    backgroundColor: '#FFFFFF',
  },
});

export default Card;
