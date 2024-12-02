import React from 'react';
import { View, Pressable, Image, ScrollView, StyleSheet } from 'react-native';
import Text from '../../components/Text.component';
import { palette } from '../../theme/palette';

interface Showtime {
  id: number;
  time: string;
  hall: string;
  price: number;
  bonus: number;
  image: any;
}

interface ShowtimeCardProps {
  showtimes: Showtime[];
  selectedTime: number | null;
  onShowtimePress: (id: number) => void;
}

const ShowTimeCardList: React.FC<ShowtimeCardProps> = ({ showtimes, selectedTime, onShowtimePress }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.hallSelectionContainerList}
    >
      {showtimes.map((show) => (
        <View key={show.id} style={styles.hallSelectionContainer}>
          <View style={styles.showtimeCardTitleContainer}>
            <Text style={styles.showtimeText} weight="medium">
              {show.time}
            </Text>
            <Text style={styles.hallText}>{show.hall}</Text>
          </View>

          <Pressable
            style={[
              styles.hallLayoutCard,
              selectedTime === show.id && styles.hallLayoutCardSelected,
            ]}
            onPress={() => onShowtimePress(show.id)}
          >
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
  );
};

const styles = StyleSheet.create({
  hallSelectionContainerList: {
    paddingLeft: 20,
  },
  hallSelectionContainer: {
    paddingRight: 10,
  },
  showtimeCardTitleContainer: {
    flexDirection: 'row',
    gap: 8,
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
  textContainer: {
    flexDirection: 'row',
  },
  priceText: {
    fontSize: 12,
    color: palette.grey,
  },
  priceTextBold: {
    fontSize: 12,
    color: palette.blackAccent,
  },
});

export default ShowTimeCardList;
