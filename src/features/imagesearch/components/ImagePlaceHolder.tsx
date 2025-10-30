import { NativeView } from '@components';
import { scale } from '@utils';
import React, { useMemo } from 'react';
import { StyleSheet, type DimensionValue } from 'react-native';

type Props = {
  width: DimensionValue;
  hight: DimensionValue;
};

const ImagePlaceHolder = ({ hight, width }: Props) => {
  const styles = useMemo(() => {
    return StyleSheet.create({
      searchImage: {
        width: typeof width === 'number' ? scale(width) : width,
        height: typeof hight === 'number' ? scale(hight) : hight,
        aspectRatio: 1,
      },
    });
  }, [width, hight]);

  return (
    <NativeView
      backgroundColor="lightGray"
      borderRadius="sm"
      style={styles.searchImage}
    />
  );
};

export default ImagePlaceHolder;
