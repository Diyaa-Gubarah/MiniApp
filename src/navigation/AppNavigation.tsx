import { ThemeProvider } from '@contexts';
import {
  AddAddressScreen,
  CategoriesScreen,
  ImageSearchScreen,
  MainScreen,
  SavedAddressScreen,
} from '@features';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store } from '@store';
import { RootStackParamList } from '@types';
import React from 'react';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="SavedAddress" component={SavedAddressScreen} />
        <Stack.Screen name="AddAddress" component={AddAddressScreen} />
        <Stack.Screen name="Category" component={CategoriesScreen} />
        <Stack.Screen name="ImageSearch" component={ImageSearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const AppContainer = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AppNavigation />
      </ThemeProvider>
    </Provider>
  );
};
