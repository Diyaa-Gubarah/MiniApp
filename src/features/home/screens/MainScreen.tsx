import { NativeView } from '@components';
import { useAppNavigation } from '@hooks';
import { RootStackParamList } from '@types';
import { useCallback } from 'react';
import { NavigateButton } from '../components';

const MainScreen = () => {
  const { navigate } = useAppNavigation();

  const navigateTo = useCallback(
    (screen: keyof Omit<RootStackParamList, 'Main'>) => {
      navigate(screen);
    },
    [navigate],
  );

  return (
    <NativeView
      backgroundColor="green"
      padding="lg"
      flex={1}
      justifyContent="space-around"
    >
      <NavigateButton
        navigateTo={() => navigateTo('SavedAddress')}
        text="Add Address"
      />
      <NavigateButton
        navigateTo={() => navigateTo('Category')}
        text="Category"
      />
      <NavigateButton
        navigateTo={() => navigateTo('ImageSearch')}
        text="Image Search"
      />
    </NativeView>
  );
};

export default MainScreen;
