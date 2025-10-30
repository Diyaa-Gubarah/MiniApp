import { NativeButton, NativeText, NativeView } from '@components';
import { Category } from '@types';
import { scale } from '@utils';
import React, { Children, memo, useCallback, useMemo, useState } from 'react';
import { StyleSheet } from 'react-native';

type Props = {};

const sidebarCategories: Category[] = [
  { id: 'mens', title: 'Mens' },
  { id: 'womens', title: 'Womens' },
  { id: 'kids', title: 'Kids' },
  { id: 'equipments', title: 'Equipments' },
  { id: 'sports', title: 'Sports' },
  { id: 'offers', title: 'Offers' },
];

const SideBar = ({}: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const toggleCategory = useCallback((title: string) => {
    setSelectedCategory(title);
  }, []);

  const textItem = useMemo(() => {
    return (title: string) => (
      <NativeView flexDirection="row" alignItems="center">
        <NativeText
          color={selectedCategory === title ? 'black' : 'subTextGray'}
          family={selectedCategory === title ? 'medium' : 'regular'}
          size="xs"
        >
          {title}
        </NativeText>
      </NativeView>
    );
  }, [selectedCategory]);

  return (
    <NativeView style={styles.sidebar}>
      {Children.toArray(
        sidebarCategories.map(category => (
          <NativeButton
            color="white"
            key={category.id}
            pv="md"
            onPress={() => toggleCategory(category.title)}
          >
            {textItem(category.title)}
          </NativeButton>
        )),
      )}
    </NativeView>
  );
};

export default memo(SideBar);

const styles = StyleSheet.create({
  sidebar: {
    width: scale(125),
  },
});
