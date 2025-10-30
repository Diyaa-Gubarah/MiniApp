import { NativeButton, NativeText, NativeView } from '@components';
import { useAppTheme } from '@hooks';
import { Address } from '@types';
import { scale } from '@utils';
import React from 'react';
import { StyleSheet } from 'react-native';
import RadioButton from './RadioButton';

interface Props {
  address: Address;
  onSelect: (id: string) => void;
}

const AddressItem: React.FC<Props> = ({ address, onSelect }) => {
  const theme = useAppTheme();

  return (
    <NativeButton
      pv="sm"
      color="white"
      onPress={() => onSelect(address.id)}
      style={[styles.container, { borderBottomColor: theme.color.lightGray }]}
    >
      <NativeView flex={1} mr="lg">
        <NativeText family='bold' size="md">
          {`${address.type} (${address.label || 'Unnamed'})`}
        </NativeText>
        <NativeText family="italic" size="sm" color="subTextGray">
          {`${address.street}, ${address.buildingNumber}, ${address.floor}`}
        </NativeText>
        <NativeText size="sm" color="subTextGray">
          Mobile number: {address.phoneNumber}
        </NativeText>
      </NativeView>
      <RadioButton
        selected={address.isSelected || false}
        onPress={() => onSelect(address.id)}
      />
    </NativeButton>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: scale(1),
  },
});

export default React.memo(AddressItem);
