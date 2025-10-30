import { NativeButton, NativeText } from '@components';
import { useAppDispatch, useAppNavigation, useAppSelector } from '@hooks';
import { Address } from '@types';
import React from 'react';
import { Alert } from 'react-native';
import { addAddress, setAddressErrors } from '../redux';
import { validateAddress } from '../validation/addressValidation';

interface Props {}

const SaveButton: React.FC<Props> = ({}) => {
  const dispatch = useAppDispatch();
  const draft = useAppSelector(state => state.addresses.draft);
  const navigation = useAppNavigation();

  const handleSave = () => {
    const result = validateAddress(draft || {});

    if (!result.isValid) {
      Alert.alert('Error', Object.values(result.errors).join('\n'));

      dispatch(setAddressErrors(result.errors));
      return;
    }

    dispatch(
      addAddress({
        id: Date.now().toString(),
        ...draft,
        isSelected: false,
      } as Address),
    );
    navigation.goBack();
  };

  return (
    <NativeButton onPress={handleSave} pv="sm" borderRadius="sm">
      <NativeText color="white" family="medium" size="md" align="center">
        Save Address
      </NativeText>
    </NativeButton>
  );
};

export default React.memo(SaveButton);
