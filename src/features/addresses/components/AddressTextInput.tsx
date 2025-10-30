import { NativeInput, NativeText, NativeView } from '@components';
import React from 'react';
import { TextInputProps } from 'react-native';

interface Props extends Omit<TextInputProps, 'onChange'> {
  value: string;
  label: string;
  error?: string;
  onChangeText?: (value: string) => void;
}

const AddressTextInput: React.FC<Props> = ({
  value,
  label,
  error,
  onChangeText,
  ...props
}) => {
  return (
    <NativeView mb="sm" flex={1}>
      <NativeInput
        placeholder={label}
        value={value}
        onChangeText={onChangeText}
        {...props}
      />

      {error ? (
        <NativeText color="green" size="xs">
          {error}
        </NativeText>
      ) : null}
    </NativeView>
  );
};

export default React.memo(AddressTextInput);
