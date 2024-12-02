import { SeatRowProps } from '@seat';
import React from 'react';
import { StyleSheet, View, Pressable, Image } from 'react-native';

const SeatRow: React.FC<SeatRowProps> = ({
  row,
  seats,
  selectedSeats,
  toggleSeatSelection,
  seatTypes,
}) => {
  return (
    <View style={styles.row}>
      {seats.map((seat, index) => {
        const seatId = `${row}-${index}`;
        const isSelected = selectedSeats.includes(seatId);
        const seatImage = isSelected
          ? seatTypes[1].image
          : seatTypes[seat].image;

        return (
          <Pressable
            key={index}
            style={styles.seat}
            hitSlop={5}
            disabled={seatTypes[seat].name === 'NotAvailable'}
            onPress={() => toggleSeatSelection(row, index)}>
            {seatImage && <Image source={seatImage} />}
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  seat: {
    width: 20,
    height: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
});

export default SeatRow;
