import {
  Header,
  NativeButton,
  NativeIcon,
  NativeText,
  NativeView,
} from '@components';
import { useAppSelector } from '@hooks';
import { scale } from '@utils';
import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import { selectCartTotalCount } from '../redux/productSlice';

type Props = {};

const Budge = () => {
  const count = useAppSelector(selectCartTotalCount) || 0;

  return (
    <NativeView
      backgroundColor="green"
      alignItems="center"
      justifyContent="center"
      borderRadius="lg"
      style={styles.budge}
    >
      <NativeText style={styles.budgeFont} color="white">
        {count}
      </NativeText>
    </NativeView>
  );
};

const Right = () => {
  return (
    <NativeView style={styles.budgeContainer}>
      <NativeButton color="white">
        <NativeIcon name="store" size={18} />
      </NativeButton>
      <Budge />
    </NativeView>
  );
};

const ImageSearchHeader = ({}: Props) => {
  return (
    <Header right={<Right />}>
      <NativeText family="bold" size="md" color="black">
        Image Search
      </NativeText>
    </Header>
  );
};

export default memo(ImageSearchHeader);

const styles = StyleSheet.create({
  budgeContainer: { position: 'relative' },
  budge: {
    position: 'absolute',
    top: scale(-8),
    right: scale(-8),
    width: scale(16),
    height: scale(16),
  },
  budgeFont: { fontSize: scale(12),fontWeight: 'bold' },
});
