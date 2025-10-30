import { NativeView } from '@components';
import React from 'react';
import { AddressListItems, SaveAddressHeader } from '../components';

const SavedAddressScreen: React.FC<{}> = ({}) => {
  return (
    <NativeView flex={1} backgroundColor="white" padding="lg">
      <SaveAddressHeader />
      <AddressListItems />
    </NativeView>
  );
};

export default SavedAddressScreen;
