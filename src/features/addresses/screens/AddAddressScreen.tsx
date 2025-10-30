import { NativeView } from '@components';
import { useAppDispatch, useAppSelector } from '@hooks';
import React from 'react';
import { ScrollView } from 'react-native';
import AddressTextInput from '../components/AddressTextInput';
import AddressTypeSelector from '../components/AddressTypeSelector';
import SaveButton from '../components/SaveButton';
import { setDraftAddress } from '../redux';

const AddAddressScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const draft = useAppSelector(state => state.addresses.draft);
  const errors = useAppSelector(state => state.addresses.errors);

  return (
    <NativeView flex={1} backgroundColor="white" padding="lg">
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <AddressTypeSelector />

        <NativeView flexDirection="row">
          <AddressTextInput
            label="Street Number"
            value={draft?.street ?? ''}
            onChangeText={text => dispatch(setDraftAddress({ street: text }))}
            error={errors?.street}
            keyboardType="number-pad"
          />
          <AddressTextInput
            keyboardType="number-pad"
            label="Zone"
            error={errors?.zone}
            value={draft?.zone ?? ''}
            onChangeText={text => dispatch(setDraftAddress({ zone: text }))}
          />
        </NativeView>

        <AddressTextInput
          keyboardType="number-pad"
          label="Building Number"
          value={draft?.buildingNumber ?? ''}
          onChangeText={text =>
            dispatch(setDraftAddress({ buildingNumber: text }))
          }
        />
        <AddressTextInput
          keyboardType="number-pad"
          label="Floor"
          value={draft?.floor ?? ''}
          onChangeText={text => dispatch(setDraftAddress({ floor: text }))}
        />
        <AddressTextInput
          keyboardType="number-pad"
          label="Apartment Number"
          value={draft?.apartmentNumber ?? ''}
          onChangeText={text =>
            dispatch(setDraftAddress({ apartmentNumber: text }))
          }
        />
        <AddressTextInput
          label="Additional Directions (Optional)"
          value={draft?.additionalDirections ?? ''}
          onChangeText={text =>
            dispatch(setDraftAddress({ additionalDirections: text }))
          }
        />
        <AddressTextInput
          keyboardType="number-pad"
          label="Phone Number"
          value={draft?.phoneNumber ?? ''}
          onChangeText={text =>
            dispatch(setDraftAddress({ phoneNumber: text }))
          }
          error={errors?.phoneNumber}
        />
        <AddressTextInput
          label="Address Label (Optional)"
          value={draft?.label ?? ''}
          onChangeText={text => dispatch(setDraftAddress({ label: text }))}
          error={errors?.label}
        />
      </ScrollView>
      <SaveButton />
    </NativeView>
  );
};

export default AddAddressScreen;
