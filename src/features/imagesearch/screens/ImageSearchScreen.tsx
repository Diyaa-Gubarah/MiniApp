import { NativeView } from '@components';
import React from 'react';
import { Dimensions, ScrollView, StyleSheet } from 'react-native';
import {
  FilterButtons,
  ImagePlaceHolder,
  ImageSearchHeader,
  ProductContainer,
} from '../components';

const { width } = Dimensions.get('window');

const ImageSearchScreen: React.FC = () => {
  return (
    <NativeView flex={1} backgroundColor="white" padding="lg">
      {/* Header */}
      <ImageSearchHeader />

      <NativeView flex={1} mt='lg'>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
          {/* Search Image */}
          <ImagePlaceHolder width={width * 0.3} hight={width * 0.3} />
          {/* Filter Buttons */}
          <FilterButtons />
          {/* Products Grid */}
          <ProductContainer />
        </ScrollView>
      </NativeView>
    </NativeView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  scrollView: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default ImageSearchScreen;
