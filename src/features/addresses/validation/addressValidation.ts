import { Address } from '@types';

export interface ValidationResult {
  errors: Record<keyof Partial<Address>, string>;
  isValid: boolean;
}

export const validateAddress = (
  address: Partial<Address>,

): ValidationResult => {
  const errors: Record<keyof Partial<Address>, string> = {};

  if (!address.type) {
    errors.type = 'Address type is required';
  }

  if (!address.street?.trim()) {
    errors.street = 'Street is required';
  }
  if (!address.zone?.trim()) {
    errors.zone = 'Zone is required';
  }

  if (!address.label?.trim()) {
    errors.label = 'Label is required';
  }

  if (!address.phoneNumber?.trim()) {
    errors.phoneNumber = 'Phone number is required';
  } else if (!/^\+?\d{7,15}$/.test(address.phoneNumber)) {
    errors.phoneNumber = 'Invalid phone number';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
