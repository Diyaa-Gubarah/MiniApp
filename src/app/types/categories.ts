export interface Category {
  id: string;
  title: string;
  image?: string;
}

export interface CategoryState {
  categories: Category[];
  selectedCategoryId?: string;
}
