import React from 'react';
import { View, StyleSheet } from 'react-native';

import Text from '../Text.component';
import { palette } from '../../theme/palette';

interface ChipProps {
  label: string;
  color: string;
}

const Chip: React.FC<ChipProps> = ({ label, color }) => {
  return (
    <View style={[styles.chip, { backgroundColor: color }]}>
      <Text style={styles.chipText} weight='bold'>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 16,
  },
  chipText: {
    textAlign: "center",
    paddingTop: 2,
    color: palette.white,
    fontSize: 12,
  },
});

export default Chip;
