import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Pressable,
  Image,
} from 'react-native';

import images from '../../assets/images';
import Text from '../../components/Text.component';
import { palette } from '../../theme/palette';
import { goBack } from '../../navigation/root.navigator';
import { SeatType } from '@seat';

const rows = [
  { rowNumber: 1, seats: [4, 4,4, 0, 0, 4, 0, 3, 3,0,3,0,3,3,3,0,0,0,0,3, 4,0,0,4,4,4] },
  { rowNumber: 2, seats: [4, 3,3, 0, 0, 4, 0, 3, 3,0,3,0,3,3,3,0,0,0,0,3, 4,0,0,3,0,4] },
  { rowNumber: 3, seats: [4, 0,3, 0, 0, 4, 0, 3, 3,0,3,0,0,3,3,0,3,3,3,3, 4,0,0,3,0,4] },
  { rowNumber: 4, seats: [4, 3,0, 0, 0, 4, 0, 3, 3,0,0,3,3,3,3,0,3,0,0,3, 4,0,0,3,3,4]},
  { rowNumber: 5, seats: [0, 3,0, 0, 0, 4, 0, 3, 3,0,0,0,3,3,3,0,0,3,0,3, 4,0,0,3,3,3] },
  { rowNumber: 6, seats: [3, 3,0, 0, 0, 4, 0, 3, 0,0,0,0,3,3,3,0,0,3,0,3, 4,0,0,3,3,0] },
  { rowNumber: 7, seats: [0, 3,0, 0, 0, 4, 0, 3, 3,0,0,0,3,3,3,0,3,0,0,3, 4,0,0,3,3,3] },
  { rowNumber: 8, seats: [3, 3,0, 0, 0, 4, 0, 3, 3,0,0,0,3,0,3,3,0,0,0,3, 4,0,0,3,3,3] },
  { rowNumber: 9, seats: [0, 3,0, 0, 0, 4, 0, 3, 3,0,0,0,3,3,3,0,0,0,0,3, 4,0,0,3,3,3] },
  { rowNumber: 10, seats: [2, 2,2, 2, 2, 4, 2, 2, 2,2,2,2,2,2,2,2,2,2,2,2, 4,2,2,2,2,2] },
];

const seatTypes: SeatType[] = {
  0:{
    name:  'NotAvailable',
    image: images.seatSelection.unavailable
  },
  1: {
    name:  'Selected',
    image: images.seatSelection.selected
  },
  2: {
    name:  'Vip',
    image: images.seatSelection.vip
  },
  3: {
    name:  'Regular',
    image: images.seatSelection.regular
  },
  4: {
    name:  'Hide',
    // @ts-ignore
    image: null
  },
};

const SeatSelection = () => {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const toggleSeatSelection = (row: number, seat: number) => {
    const seatId = `${row}-${seat}`;
    setSelectedSeats(prev =>
      prev.includes(seatId)
        ? prev.filter(id => id !== seatId)
        : [...prev, seatId]
    );
  };

  const onBackPress = () => {
    goBack();
  };

  const renderSeats = (row: number, seats: number[]) => {
    return (
      <View style={styles.row}>
        {seats.map((seat, index) => {
          const seatId = `${row}-${index}`;
          const isSelected = selectedSeats.includes(seatId);
          const seatImage = isSelected? seatTypes[1].image:
            seatTypes[seat].image;

          return (
            <Pressable
            hitSlop={5}
              key={index}
              style={[styles.seat]}
              disabled={seatTypes[seat].name === 'NotAvailable'}
              onPress={() => toggleSeatSelection(row, index)}>
                <Image source={seatImage}/>
            </Pressable>
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <Pressable onPress={onBackPress} hitSlop={40} style={styles.backArrow}>
          <Image source={images.backArrowDark} />
        </Pressable>
        <View style={styles.movieDetailsContainer}>
          <Text style={styles.title} weight="medium">
            The King's Man
          </Text>
          <Text style={styles.subtitle} weight="medium">
            In Theaters December 22, 2021
          </Text>
        </View>
      </View>
      <Image source={images.seatSelection.screen} style={styles.screenImage} />
      <ScrollView horizontal contentContainerStyle={styles.horizontalScroll}>
        <View style={styles.seatMap}>
          {rows.map((row, index) => (
            <View key={index} style={styles.rowContainer}>
              <Text style={styles.rowLabel} weight='bold'>{row.rowNumber}</Text>
              {renderSeats(row.rowNumber, row.seats)}
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.helperContainer}>
        <View style={styles.helperItem}>
        <Image  source={images.seatSelection.selected} style={styles.helperIcon}/>
          <Text style={styles.helperText}>Selected</Text>
        </View>
        <View style={styles.helperItem}>
         <Image  source={images.seatSelection.unavailable} style={styles.helperIcon}/>
          <Text style={styles.helperText}>Not available</Text>
        </View>
        </View>
        <View style={styles.helperContainer}>
        <View style={styles.helperItem}>
        <Image  source={images.seatSelection.vip} style={styles.helperIcon}/>
          <Text style={styles.helperText}>VIP (150$)</Text>
        </View>
        <View style={styles.helperItem}>
        <Image  source={images.seatSelection.regular} style={styles.helperIcon}/>
          <Text style={styles.helperText}>Regular (50$)</Text>
        </View>
        </View>
        <Pressable
        style={
          styles.payButton }>
        <Text style={styles.payButtonText} weight="bold">Proceed to pay</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: palette.white,
  },
  backArrow: {
    display: 'flex',
    paddingTop: 5,
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    color: palette.blackAccent,
  },
  subtitle: {
    fontSize: 12,
    textAlign: 'center',
    color: palette.primary,
  },
  screenImage:{
    marginTop: 100,
    width: "70%",
    display: "flex",

verticalAlign:"bottom",
alignSelf:"center"
  },
  helperContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 15
  },
  helperItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  helperIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
    borderRadius: 4,
  },
  helperText: {
    fontSize: 14,
    color:palette.grey,
  },
  movieDetailsContainer: {
    width: '100%',
    alignSelf: 'center',
  },
  subHeader: {
    textAlign: 'center',
    color: '#6c757d',
    marginBottom: 16,
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
    paddingLeft: 20
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  rowLabel: {
    textAlign: 'center',
    fontSize: 6,
    color: palette.blackAccent,
  },
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
  seatAvailable: {
    backgroundColor: '#007bff',
  },
  seatSelected: {
    backgroundColor: '#ffc107',
  },
  seatNotAvailable: {
    backgroundColor: '#6c757d',
  },
  seatText: {
    fontSize: 12,
    color: '#fff',
  },
  footer: {
    padding: 16,
    alignItems: 'center',
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
