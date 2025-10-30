import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@types';
import { RootState } from '@store';

type ProductState = {
  products: Product[];
  favorites: string[]; // list of product ids
  cart: Record<string, { product: Product; qty: number; total: number }>; // productId -> { product, qty, total }
  filter: string | null;
};


const sampleProducts: Product[] = [
  {
    id: '1',
    price: 48,
    title: 'Red & Black T-Shirt',
    image: 'https://via.placeholder.com/300x350/4A5568/FFFFFF?text=T-Shirt',
    trending: true,
  },
  {
    id: '2',
    price: 9,
    title: 'Red & Black T-Shirt',
    image: 'https://via.placeholder.com/300x350/1F2937/FFFFFF?text=T-Shirt',
    discount: 50,
  },
  {
    id: '3',
    price: 48,
    title: 'Red & Black T-Shirt',
    image: 'https://via.placeholder.com/300x350/1F2937/FFFFFF?text=Polo',
  },
  {
    id: '4',
    price: 48,
    title: 'U S Polo Assn Men Black & Red',
    image: 'https://via.placeholder.com/300x350/374151/FFFFFF?text=Polo',
  },
  {
    id: '5',
    price: 48,
    title: 'Red & Black T-Shirt',
    image: 'https://via.placeholder.com/300x350/1F2937/FFFFFF?text=Polo',
  },
  {
    id: '6',
    price: 48,
    title: 'U S Polo Assn Men Black & Red',
    image: 'https://via.placeholder.com/300x350/374151/FFFFFF?text=Polo',
  },
];


const initialState: ProductState = {
  products: sampleProducts,
  favorites: [],
  cart: {},
  filter: null,
};

const productSlice = createSlice({
  name: 'imagesearch',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      if (state.favorites.includes(id)) {
        state.favorites = state.favorites.filter(f => f !== id);
      } else {
        state.favorites.push(id);
      }
    },
    addToCart: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const prod = state.products.find(p => p.id === id);
      if (!prod) return; // product not found in catalog

      const price = prod.price || 0;
      const existing = state.cart[id];
      if (existing) {
        existing.qty += 1;
        existing.total = existing.qty * price;
      } else {
        state.cart[id] = { product: prod, qty: 1, total: price };
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      if (state.cart[id]) {
        delete state.cart[id];
      }
    },
    clearProducts: state => {
      state.products = [];
      state.favorites = [];
      state.cart = {};
    },
    setFilter: (state, action: PayloadAction<string | null>) => {
      state.filter = action.payload;
    },
  },
});

// Selectors
export const selectProducts = (state: RootState) => state.imagesearch.products;
export const selectFavorites = (state: RootState) => state.imagesearch.favorites;
export const selectCart = (state: RootState) => state.imagesearch.cart;
export const selectFilter = (state: RootState) => state.imagesearch.filter;

// Derived selectors
export const selectCartTotalCount = (state: RootState) =>
  Object.values(state.imagesearch.cart).reduce((sum, entry) => sum + (entry?.qty || 0), 0);

export const selectCartDistinctCount = (state: RootState) =>
  Object.keys(state.imagesearch.cart).length;

export const selectCartTotalAmount = (state: RootState) =>
  Object.values(state.imagesearch.cart).reduce((sum, entry) => sum + (entry?.total || 0), 0);

export const selectFilteredProducts = (state: RootState) => {
  const { products, filter } = state.imagesearch;
  if (!filter) return products;

  switch (filter) {
    case 'Price Low to High':
      return [...products].sort((a, b) => (a.price || 0) - (b.price || 0));
    case 'Price High to Low':
      return [...products].sort((a, b) => (b.price || 0) - (a.price || 0));
    case 'Newest':
      return [...products].reverse();
    case 'Top Sales':
    default:
      return products;
  }
};

export const {
  setProducts,
  toggleFavorite,
  addToCart,
  removeFromCart,
  clearProducts,
  setFilter,
} = productSlice.actions;

export default productSlice.reducer;

