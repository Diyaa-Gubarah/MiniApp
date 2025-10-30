import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@types';

type AppNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const useAppNavigation = (): Pick<AppNavigationProp, 'navigate'| 'goBack'> => {
  return useNavigation<AppNavigationProp>();
};
