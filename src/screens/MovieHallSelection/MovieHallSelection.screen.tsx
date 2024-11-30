import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import images from '../../assets/images';
import Text from '../../components/Text.component';
import {goBack, navigateTo} from '../../navigation/root.navigator';
import {palette} from '../../theme/palette';

const MovieHallSelectionScreen = () => {
  const [selectedDate, setSelectedDate] = useState('5 Mar');
  const [selectedTime, setSelectedTime] = useState<number | null>(null);

  const dates = ['5 Mar', '6 Mar', '7 Mar', '8 Mar', '9 Mar'];
  const showtimes = [
    {
      id: 1,
      time: '12:30',
      hall: 'Cinetech + Hall 1',
      price: 50,
      bonus: 2500,
      image: images.hallLayout.movieHallLayout,
    },
    {
      id: 2,
      time: '13:30',
      hall: 'Cinetech + Hall 1',
      price: 75,
      bonus: 3000,
      image: images.hallLayout.movieHallLayout,
    },
  ];

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

      {/* Date Selector */}
      <View style={styles.dateContainer}>
        <Text style={[styles.title, styles.dateTitle]} weight="medium">
          Date
        </Text>
        <View style={styles.datesList}>
          {dates.map(date => (
            <Pressable
              key={date}
              style={[
                styles.dateButton,
                selectedDate === date && styles.dateButtonSelected,
              ]}
              onPress={() => handleDatePress(date)}>
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
      </View>

      {/* Showtime Cards */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.hallSelectionContainerList}>
        {showtimes.map(show => (
          <View style={styles.hallSelectionContainer}>
            <View style={styles.showtimeCardTitleContainer}>
              <Text style={styles.showtimeText} weight="medium">
                {show.time}
              </Text>
              <Text style={styles.hallText}>{show.hall}</Text>
            </View>

            <Pressable
              key={show.id}
              style={[
                styles.hallLayoutCard,
                selectedTime === show.id && styles.hallLayoutCardSelected,
              ]}
              onPress={() => handleShowtimePress(show.id)}>
              <Image source={show.image} style={styles.hallImage} />
            </Pressable>
            <View style={styles.textContainer}>
              <Text style={styles.priceText} weight="medium">
                From{' '}
              </Text>
              <Text style={styles.priceTextBold} weight="bold">
                {show.price}$
              </Text>
              <Text style={styles.priceText} weight="medium">
                or{' '}
              </Text>
              <Text style={styles.priceTextBold} weight="bold">
                {show.bonus} bonus
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>

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
  showtimeCardTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },
  movieDetailsContainer: {
    width: '100%',
    alignSelf: 'center',
  },
  dateContainer: {
    paddingTop: 174,
    paddingBottom: 40,
    paddingLeft: 20,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  hallSelectionContainerList: {
    paddingLeft: 20,
  },
  hallSelectionContainer: {
    paddingRight: 10,
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
  subtitle: {
    fontSize: 12,
    textAlign: 'center',
    color: palette.primary,
  },
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
  hallLayoutCard: {
    width: 249,
    height: 145,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: palette.greyAccent1,
    backgroundColor: palette.white,
  },
  hallLayoutCardSelected: {
    borderColor: palette.primary,
  },
  showtimeText: {
    fontSize: 12,
    color: palette.blackAccent,
  },
  hallText: {
    fontSize: 12,
    color: palette.grey,
  },
  hallImage: {
    width: '100%',
    height: 113,
    marginVertical: 10,
    resizeMode: 'contain',
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
