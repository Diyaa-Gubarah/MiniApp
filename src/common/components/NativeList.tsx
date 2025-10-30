import React, { memo, useCallback } from 'react';
import {
  FlatList,
  FlatListProps,
  ListRenderItem,
  ListRenderItemInfo,
} from 'react-native';

interface NativeListProps<T> extends Partial<FlatListProps<T>> {
  data: T[];
  renderItem: ListRenderItem<T>;
  keyExtractor?: (item: T, index: number) => string;
}

function NativeListComponent<T>(props: NativeListProps<T>) {
  const { data, renderItem, keyExtractor, ...restProps } = props;

  const renderItemMemo = useCallback(
    (info: ListRenderItemInfo<T>) => renderItem(info),
    [renderItem],
  );

  const defaultKeyExtractor = useCallback(
    (item: T, index: number) => {
      if (keyExtractor) return keyExtractor(item, index);
      if (typeof item === 'object' && item !== null && 'id' in item) {
        return String((item as any).id);
      }
      return `item-${index}`;
    },
    [keyExtractor],
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItemMemo}
      keyExtractor={defaultKeyExtractor}
      removeClippedSubviews={true}
      maxToRenderPerBatch={10}
      updateCellsBatchingPeriod={50}
      initialNumToRender={10}
      windowSize={5}
      showsVerticalScrollIndicator={false}
      {...restProps}
    />
  );
}

const NativeList = memo(NativeListComponent);
export default NativeList;
