import { scale } from '@utils';
import React, { memo } from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

interface NativeInputProps extends TextInputProps {}

const NativeInput = (props: NativeInputProps) => {
  return (
    <TextInput
      maxLength={30}
      style={[styles.input, props.style]}
      placeholderTextColor="#999999"
      {...props}
    />
  );
};

export default memo(NativeInput);

const styles = StyleSheet.create({
  input: {
    height: scale(48),
    borderWidth: scale(1),
    borderColor: '#E5E5E5',
    borderRadius: scale(8),
    paddingHorizontal: scale(16),
    fontSize: scale(16),
    color: '#000000',
    backgroundColor: '#ffffff',
    flexGrow: 1,
  },
});
