import { NativeText, NativeView } from '@components';
import { Category } from '@types';
import React, { Children } from 'react';
import { StyleSheet } from 'react-native';

type Props = {};

const items: Category[] = [
  {
    id: '1',
    title: 'Lifestyle',
    image: 'https://your-image-url.com/lifestyle1.jpg',
  },
  {
    id: '2',
    title: 'Training',
    image: 'https://your-image-url.com/training.jpg',
  },
  {
    id: '3',
    title: 'Lifestyle',
    image: 'https://your-image-url.com/lifestyle2.jpg',
  },
  {
    id: '4',
    title: 'Running',
    image: 'https://your-image-url.com/running.jpg',
  },
];

const ExpandableContainer = ({}: Props) => {
  return (
    <NativeView wrap flexDirection="row" padding="sm">
      {Children.toArray(
        items.map(item => (
          <NativeView
            key={item.id}
            padding="sm"
            alignItems="center"
            style={styles.apparelItem}
          >
            <NativeView
              mb="sm"
              borderRadius="sm"
              backgroundColor="lightGray"
              style={styles.apparelImage}
            />
            <NativeText size="xs" trim align="center" color="subTextGray">
              {item.title}
            </NativeText>
          </NativeView>
        )),
      )}
    </NativeView>
  );
};

export default ExpandableContainer;

const styles = StyleSheet.create({
  apparelItem: {
    width: '33%',
  },
  apparelImage: {
    width: '100%',
    aspectRatio: 1,
  },
});
