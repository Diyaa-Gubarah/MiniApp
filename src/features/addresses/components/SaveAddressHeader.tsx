import { Header, NativeButton, NativeIcon, NativeText } from '@components';
import { useAppNavigation } from '@hooks';
import React, { useCallback } from 'react';

type Props = {};

const Right = () => {
  const navigation = useAppNavigation();

  const navigateToAddAddress = useCallback(() => {
    navigation.navigate('AddAddress');
  }, [navigation]);

  return (
    <NativeButton
      ph="sm"
      pv="xs"
      onPress={navigateToAddAddress}
      borderRadius="lg"
      color="offWhite"
    >
      <NativeIcon name="add" size={18} />
      <NativeText ml='xs'  trim family="bold" size="xs">
        Add
      </NativeText>
    </NativeButton>
  );
};

const SaveAddressHeader = ({}: Props) => {
  return (
    <Header right={<Right />}>
      <NativeText family="bold" size="md" color="black">
        Save Address
      </NativeText>
    </Header>
  );
};

export default SaveAddressHeader;
