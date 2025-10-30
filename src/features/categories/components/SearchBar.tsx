import { NativeIcon, NativeInput, NativeView } from '@components';
import { useAppTheme } from '@hooks';
import React, { memo, useMemo, useState } from 'react';
import { StyleSheet } from 'react-native';

type Props = {};

const SearchBar = ({}: Props) => {
  const [searchText, setSearchText] = useState('');

  const theme = useAppTheme();
  const styles = useMemo(
    () =>
      StyleSheet.create({
        searchInput: {
          flex: 1,
          fontSize: theme.font.size.xs,
          color: theme.color.black,
          marginLeft: theme.spacing.sm,
        },
      }),
    [theme],
  );

  return (
    <NativeView
      borderRadius="sm"
      backgroundColor="offWhite"
      ph="sm"
      mt="md"
      mb="md"
      flexDirection="row"
      alignItems="center"
    >
      <NativeIcon name="search" size={16} color="lightShadow" />
      <NativeInput
        maxLength={30}
        style={styles.searchInput}
        placeholder="Search"
        value={searchText}
        onChangeText={setSearchText}
      />
    </NativeView>
  );
};

export default memo(SearchBar);
