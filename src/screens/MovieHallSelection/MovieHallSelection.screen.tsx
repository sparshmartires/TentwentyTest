import React, { useState } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';

import Text from '../../components/Text.component';
import { goBack, navigateTo } from '../../navigation/root.navigator';
import { palette } from '../../theme/palette';
import Header from '../../components/Header.component';
import DateSelector from './DateSelector.component';
import ShowTimeCardList from './ShowTimeCardList.component';
import { dates, showtimes } from './Data.config';

const MovieHallSelectionScreen = () => {
  const [selectedDate, setSelectedDate] = useState('5 Mar');
  const [selectedTime, setSelectedTime] = useState<number | null>(null);

  const handleDatePress = (date: string) => {
    setSelectedDate(date);
    setSelectedTime(null); // Reset selected time when date changes
  };

  const onBackPress = () => {
    goBack();
  };

  const handleShowtimePress = (id: number) => {
    if (!id) return;
    setSelectedTime(id);
  };

  const onSeatSelectionPress = () => {
    navigateTo('SeatSelectionScreen');
  };

  return (
    <View style={styles.container}>
      {/* Movie Title and Subtitle */}
      <Header
        title={"The King's Man"}
        subtitle={'In Theaters December 22, 2021'}
        onBackPress={onBackPress}
      />
      {/* Date Selector */}
      <View style={styles.dateListContainer}>
        <Text style={[styles.title, styles.dateTitle]} weight="medium">
          Date
        </Text>
        <DateSelector
          dates={dates}
          selectedDate={selectedDate}
          onDatePress={handleDatePress}
        />
      </View>

      {/* Showtime Cards */}
      <ShowTimeCardList
        showtimes={showtimes}
        selectedTime={selectedTime}
        onShowtimePress={handleShowtimePress}
      />

      {/* Select Seats Button */}
      <Pressable
        style={[
          styles.selectSeatsButton,
          !selectedTime && styles.selectSeatsButtonDisabled,
        ]}
        disabled={!selectedTime}
        onPress={onSeatSelectionPress}>
        <Text style={styles.selectSeatsText} weight="medium">
          Select Seats
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dateListContainer: {
    paddingTop: 174,
    paddingBottom: 40,
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    color: palette.blackAccent,
  },
  dateTitle: {
    textAlign: 'left',
    paddingBottom: 5,
  },
  priceText: {
    fontSize: 12,
    color: palette.grey,
  },
  priceTextBold: {
    fontSize: 12,
    color: palette.blackAccent,
  },
  selectSeatsButton: {
    marginTop: 20,
    margin: 26,
    backgroundColor: palette.primary,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  selectSeatsButtonDisabled: {
    backgroundColor: palette.greyAccent1,
  },
  selectSeatsText: {
    color: palette.white,
    fontSize: 14,
  },
});

export default MovieHallSelectionScreen;
