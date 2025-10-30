import { NativeButton, NativeView } from '@components';
import { useAppTheme } from '@hooks';
import { scale } from '@utils';
import React, { useMemo } from 'react';
import { StyleSheet } from 'react-native';

interface Props {
  selected: boolean;
  onPress: () => void;
}

const RadioButton: React.FC<Props> = ({ selected, onPress }) => {
  const theme = useAppTheme();
  const memoStyles = useMemo(
    () =>
      StyleSheet.create({
        container: { padding: 4 },
        outer: {
          borderColor: theme.color.black,
          ...(selected && { borderColor: theme.color.green }),
        },
      }),
    [theme.color, selected],
  );

  const memoRadioInner = useMemo(() => {
    if (!selected) return null;
    return (
      <NativeView
        style={{ ...styles.inner, backgroundColor: theme.color.green }}
      />
    );
  }, [selected, theme.color.green]);

  return (
    <NativeButton ph="sm" pv="sm" color="white" onPress={onPress}>
      <NativeView
        justifyContent="center"
        alignItems="center"
        style={[styles.outer, memoStyles.outer]}
      >
        {memoRadioInner}
      </NativeView>
    </NativeButton>
  );
};

const styles = StyleSheet.create({
  outer: {
    width: scale(20),
    height: scale(20),
    borderRadius: scale(10),
    borderWidth: scale(2),
  },
  inner: {
    width: scale(10),
    height: scale(10),
    borderRadius: scale(5),
  },
});

export default React.memo(RadioButton);
