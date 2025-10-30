// Address item type
export interface Address {
  id: string;
  type: 'Apartment' | 'House' | 'Office';
  street: string;
  zone: string;
  buildingNumber?: string;
  floor?: string;
  apartmentNumber?: string;
  additionalDirections?: string;
  phoneNumber: string;
  countryCode?: string; // e.g. "+974"
  label?: string; // e.g. "Home", "Work"
  isSelected?: boolean;
}

export interface AddressState {
  addresses: Address[];
  draft?: Partial<Address>;
  errors: Record<keyof Partial<Address>, string>| null;
}
