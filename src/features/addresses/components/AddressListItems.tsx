import { NativeList, NativeText, NativeView } from '@components';
import { useAppDispatch, useAppSelector } from '@hooks';
import React, { memo, useCallback } from 'react';
import { selectAddress } from '../redux';
import AddressItem from './AddressItem';

type Props = {};

const AddressListItems = ({}: Props) => {
  const dispatch = useAppDispatch();
  const addresses = useAppSelector(state => state.addresses.addresses);

  const handleSelect = useCallback(
    (id: string) => {
      dispatch(selectAddress(id));
    },
    [dispatch],
  );

  const renderItem = ({ item }: { item: any }) => (
    <AddressItem address={item} onSelect={handleSelect} />
  );

  const ListEmptyComponent = (
    <NativeView
      flex={1}
      alignItems="center"
      justifyContent="center"
      backgroundColor="lightGray"
    >
      <NativeText size="md" color="subTextGray">
        No addresses found
      </NativeText>
    </NativeView>
  );

  return (
    <NativeList
      data={addresses}
      renderItem={renderItem}
      ListEmptyComponent={ListEmptyComponent}
    />
  );
};

export default memo(AddressListItems);
