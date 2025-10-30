import { NativeView } from '@components';
import { Category } from '@types';
import React, { Children } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {
  CategoryHeader,
  CategoryItem,
  ExpandableContainer,
  SearchBar,
  SideBar,
} from '../components';

const mainCategories: Category[] = [
  { id: 'sale', title: 'Sale' },
  { id: 'apparel', title: 'Apparel' },
  { id: 'footwear', title: 'Footwear' },
  { id: 'sports', title: 'Sports' },
  { id: 'accessories', title: 'Accessories' },
];

const CategoriesScreen: React.FC = () => {
  return (
    <NativeView flex={1} backgroundColor="white" padding="lg">
      {/* Header */}
      <CategoryHeader />
      {/* Search Bar */}
      <SearchBar />

      <NativeView flexDirection="row" flex={1}>
        {/* Side Bar */}
        <SideBar />
        {/* Main Content */}
        <ScrollView style={styles.mainContent}>
          {/* Categories */}
          {Children.toArray(
            mainCategories.map(category => (
              <CategoryItem key={category.id} category={category}>
                <ExpandableContainer />
              </CategoryItem>
            )),
          )}
        </ScrollView>
      </NativeView>
    </NativeView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContent: {
    flex: 1,
  },
});

export default CategoriesScreen;
