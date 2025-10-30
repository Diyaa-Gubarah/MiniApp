import { useAppNavigation } from '@hooks';
import React from 'react';
import NativeButton from './NativeButton';
import NativeIcon from './NativeIcon';
import NativeView from './NativeView';

interface HeaderProps {
  right?: React.ReactNode;
  children?: React.ReactNode; // usually a title
}

const Header: React.FC<HeaderProps> = ({ right, children }) => {
  const { goBack } = useAppNavigation();
  return (
    <NativeView flexDirection="row" alignItems="center" >
      <NativeView flex={0.3} alignItems="flex-start">
        <NativeButton onPress={goBack} color="white">
          <NativeIcon name="arrow-back" size={18} />
        </NativeButton>
      </NativeView>

      <NativeView flex={0.7} alignItems="center" justifyContent="center">
        {children}
      </NativeView>

      <NativeView flex={0.3} alignItems="flex-end">
        {right}
      </NativeView>
    </NativeView>
  );
};

export default React.memo(Header);
