import { NativeButton, NativeIcon, NativeText, NativeView } from '@components';
import { Category } from '@types';
import { scale } from '@utils';
import React, { memo, useCallback, useState } from 'react';
import { StyleSheet } from 'react-native';

type Props = { category: Category; children?: React.ReactNode };

const CategoryItem = ({ category, children }: Props) => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([
    'Sale',
  ]);

  const toggleCategory = useCallback((categoryId: string) => {
    setExpandedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId],
    );
  }, []);

  return (
    <NativeView ph="sm" pv='xs'>
      <NativeButton color="white" onPress={() => toggleCategory(category.id)}>
        <NativeView
          flexDirection="row"
          flex={1}
          justifyContent="space-between"
          alignItems="center"
          pv="sm"
        >
          <NativeText size="sm" color="black" family="bold">
            {category.title}
          </NativeText>

          {expandedCategories.includes(category.id) ? (
            <NativeIcon name="keyboard-arrow-up" size={14} color="lightGray" />
          ) : (
            <NativeIcon
              name="keyboard-arrow-down"
              size={14}
              color="lightGray"
            />
          )}
        </NativeView>
      </NativeButton>
      {expandedCategories.includes(category.id) && children}
      <NativeView style={styles.divider} />
    </NativeView>
  );
};

export default memo(CategoryItem);

const styles = StyleSheet.create({
  divider: {
    height: scale(1.5),
    backgroundColor: '#d3d3d3',
  },
});
