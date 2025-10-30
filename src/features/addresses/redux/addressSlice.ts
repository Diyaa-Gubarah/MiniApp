import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Address, AddressState } from '@types';

const initialState: AddressState = {
  addresses: [],
  draft: {},
  errors: null,
};

const addressSlice = createSlice({
  name: 'addresses',
  initialState,
  reducers: {
    // --- Draft management
    setDraftAddress: (state, action: PayloadAction<Partial<Address>>) => {
      state.draft = { ...state.draft, ...action.payload };
    },
    clearDraftAddress: state => {
      state.draft = {};
      state.errors = null;
    },

    // --- Error handling
    setAddressErrors: (
      state,
      action: PayloadAction<Record<keyof Partial<Address>, string>>,
    ) => {
      state.errors = action.payload;
    },
    clearAddressErrors: state => {
      state.errors = null;
    },

    // --- CRUD operations
    addAddress: (state, action: PayloadAction<Address>) => {
      state.addresses.push(action.payload);
      state.draft = {};
      state.errors = null;
    },
    removeAddress: (state, action: PayloadAction<string>) => {
      state.addresses = state.addresses.filter(a => a.id !== action.payload);
    },
    selectAddress: (state, action: PayloadAction<string>) => {
      state.addresses = state.addresses.map(a => ({
        ...a,
        isSelected: a.id === action.payload,
      }));
    },
    updateAddress: (state, action: PayloadAction<Address>) => {
      const index = state.addresses.findIndex(a => a.id === action.payload.id);
      if (index !== -1) {
        state.addresses[index] = action.payload;
      }
      state.draft = {};
      state.errors = null;
    },
  },
});

export const {
  setDraftAddress,
  clearDraftAddress,
  setAddressErrors,
  clearAddressErrors,
  addAddress,
  removeAddress,
  selectAddress,
  updateAddress,
} = addressSlice.actions;

export default addressSlice.reducer;
