import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import Text from '../../components/Text.component';
import { palette } from '../../theme/palette';

interface DateSelectorProps {
  dates: string[];
  selectedDate: string;
  onDatePress: (date: string) => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({
  dates,
  selectedDate,
  onDatePress,
}) => {
  return (
    <View style={styles.datesList}>
      {dates.map(date => (
        <Pressable
          key={date}
          style={[
            styles.dateButton,
            selectedDate === date && styles.dateButtonSelected,
          ]}
          onPress={() => onDatePress(date)}>
          <Text
            style={[
              styles.dateText,
              selectedDate === date && styles.dateTextSelected,
            ]}
            weight="medium">
            {date}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  datesList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  dateButton: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 10,
    backgroundColor: palette.greyAccent2,
  },
  dateButtonSelected: {
    backgroundColor: palette.primary,
  },
  dateText: {
    marginTop: 2,
    fontSize: 12,
    color: palette.blackAccent,
  },
  dateTextSelected: {
    color: palette.white,
  },
});

export default DateSelector;
