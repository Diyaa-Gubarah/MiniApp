import { NativeButton, NativeText, NativeView } from '@components';
import { useAppDispatch, useAppSelector, useAppTheme } from '@hooks';
import React, { useCallback } from 'react';
import { setDraftAddress } from '../redux'; // updated action from new slice

type AddressType = 'Apartment' | 'House' | 'Office';

const AddressTypeSelector: React.FC = () => {
  const theme = useAppTheme();
  const dispatch = useAppDispatch();
  const selectedType = useAppSelector(state => state.addresses.draft?.type);

  const types: AddressType[] = ['Apartment', 'House', 'Office'];

  const handleSelect = useCallback(
    (type: AddressType) => {
      dispatch(setDraftAddress({ type }));
    },
    [dispatch],
  );

  return (
    <NativeView flexDirection="row" mb="md">
      {types.map(type => {
        const isSelected = selectedType === type;
        const backgroundColor = isSelected
          ? theme.color.black
          : theme.color.offWhite;

        const textColor = isSelected ? 'white' : 'black';

        return (
          <NativeButton
            key={type}
            flex
            ph="lg"
            pv="sm"
            mr="sm"
            borderRadius="lg"
            style={{ backgroundColor }}
            onPress={() => handleSelect(type)}
          >
            <NativeText trim color={textColor} family="bold" size="sm">
              {type}
            </NativeText>
          </NativeButton>
        );
      })}
    </NativeView>
  );
};

export default React.memo(AddressTypeSelector);
