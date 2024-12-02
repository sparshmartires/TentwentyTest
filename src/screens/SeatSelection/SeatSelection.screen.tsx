import React, {useState} from 'react';
import {StyleSheet, View, ScrollView, Pressable, Image} from 'react-native';

import images from '../../assets/images';
import Text from '../../components/Text.component';
import {palette} from '../../theme/palette';
import {goBack} from '../../navigation/root.navigator';
import Header from '../../components/Header.component';
import { SeatItemTypes, seatTypes, seatingArraingment } from './Seat.config';
import SeatRow from './SeatRow.component';
import SeatTypeItemList from './SeatTypeItemList.component';

const SeatSelection = () => {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const toggleSeatSelection = (row: number, seat: number) => {
    const seatId = `${row}-${seat}`;
    setSelectedSeats(prev =>
      prev.includes(seatId)
        ? prev.filter(id => id !== seatId)
        : [...prev, seatId],
    );
  };

  const onBackPress = () => {
    goBack();
  };

  return (
    <View style={styles.container}>
      <Header
        title={"The King's Man"}
        subtitle={'In Theaters December 22, 2021'}
        onBackPress={onBackPress}
      />
      <Image source={images.seatSelection.screen} style={styles.screenImage} />
      <ScrollView horizontal contentContainerStyle={styles.horizontalScroll}>
        <View style={styles.seatMap}>
          {seatingArraingment.map((row, index) => (
            <View key={index} style={styles.seatingArraingmentContainer}>
              <Text style={styles.seatingArraingmentRowNumber} weight="bold">
                {row.rowNumber}
              </Text>
              <SeatRow
                row={row.rowNumber}
                seats={row.seats}
                selectedSeats={selectedSeats}
                toggleSeatSelection={toggleSeatSelection}
                seatTypes={seatTypes}
              />
            </View>
          ))}
        </View>
      </ScrollView>
      <SeatTypeItemList SeatItemTypes={SeatItemTypes.slice(0, 2)} />
      <SeatTypeItemList SeatItemTypes={SeatItemTypes.slice(-2)} />
      <Pressable style={styles.payButton}>
        <Text style={styles.payButtonText} weight="bold">
          Proceed to pay
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenImage: {
    marginTop: 100,
    width: '70%',
    display: 'flex',

    verticalAlign: 'bottom',
    alignSelf: 'center',
  },
  screen: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6c757d',
    marginBottom: 8,
  },
  horizontalScroll: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    paddingBottom: 16,
  },
  seatMap: {
    flexDirection: 'column',
    paddingLeft: 20,
  },
  seatingArraingmentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  seatingArraingmentRowNumber: {
    textAlign: 'center',
    fontSize: 6,
    color: palette.blackAccent,
  },
  payButton: {
    marginTop: 20,
    margin: 26,
    backgroundColor: palette.primary,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  payButtonText: {
    color: palette.white,
    fontSize: 14,
  },
});

export default SeatSelection;
