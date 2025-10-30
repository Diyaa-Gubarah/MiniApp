import { NativeButton, NativeText } from '@components';
import { RootStackParamList } from '@types';

const NavigateButton = ({
  navigateTo,
  text,
}: {
  navigateTo: (screen: keyof Omit<RootStackParamList, 'Main'>) => void;
  text: string;
}) => {
  return (
    <NativeButton
    pv='md'
      borderRadius="lg"
      color="white"
      onPress={() => navigateTo('AddAddress')}
    >
      <NativeText family="bold" size="lg" color="black">
        {text}
      </NativeText>
    </NativeButton>
  );
};

export default NavigateButton;