import { Header, NativeText } from '@components';
import React from 'react';

type Props = {};

const CategoryHeader = ({}: Props) => {
  return (
    <Header>
      <NativeText family="bold" size="md" color="black">
        Categories
      </NativeText>
    </Header>
  );
};

export default CategoryHeader;
