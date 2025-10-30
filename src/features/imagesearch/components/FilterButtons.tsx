import { NativeButton, NativeText, NativeView } from '@components';
import React, { memo, useCallback } from 'react';
import { ScrollView } from 'react-native';
import { useAppDispatch, useAppSelector } from '@hooks';
import { selectFilter, setFilter } from '../redux/productSlice';

type Props = {};

const filters = [
  'Top Sales',
  'Newest',
  'Price Low to High',
  'Price High to Low',
];

const FilterButtons = ({}: Props) => {
  const dispatch = useAppDispatch();
  const selectedFilter = useAppSelector(selectFilter) || 'Top Sales';

  const onPressFilter = useCallback(
    (filter: string) => {
      dispatch(setFilter(filter));
    },
    [dispatch],
  );

  const memoFilterItem = useCallback(
    (filter: string) => {
      return (
        <NativeButton
          ph="lg"
          pv="xs"
          borderRadius="lg"
          mr="sm"
          color={selectedFilter === filter ? 'black' : 'lightGray'}
          key={filter}
          onPress={() => onPressFilter(filter)}
        >
          <NativeText
            color={selectedFilter === filter ? 'white' : 'black'}
            size="xs"
          >
            {filter}
          </NativeText>
        </NativeButton>
      );
    },
    [selectedFilter, onPressFilter],
  );

  return (
    <NativeView flex={1} mt="md" mb="md">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {filters.map(filter => memoFilterItem(filter))}
      </ScrollView>
    </NativeView>
  );
};

export default memo(FilterButtons);
