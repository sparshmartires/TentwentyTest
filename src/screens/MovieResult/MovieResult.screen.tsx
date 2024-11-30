import React from 'react';
import {View, StyleSheet, Pressable, Image} from 'react-native';

import {palette} from '../../theme/palette';
import images from '../../assets/images';
import Text from '../../components/Text.component';
import {goBack} from '../../navigation/root.navigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '../../navigation/app.navigator';
import SearchResultList from '../MovieSearchList/SearchResultList.component';
import searchResults from '../MovieSearchList/Results.config';

type MovieResultProps = NativeStackScreenProps<
  StackParamList,
  'MovieResultScreen'
>;

const MovieResultScreen = ({route}: MovieResultProps) => {
  const movieIds = route.params?.movieIds;
  
  const onBackPress = () => {
    goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.backArrowContainer}>
        <Pressable onPress={onBackPress} hitSlop={40}>
          <Image source={images.backArrowDark} />
        </Pressable>
        <Text weight="medium" style={styles.text}>
          {movieIds?.length} Results Found
        </Text>
      </View>
      <SearchResultList showHeader={false} filteredResults={searchResults.movies.filter(movie => movieIds.includes(movie.id))} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backArrowContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: palette.white,
  },
  text: {
    fontSize: 16,
    color: palette.blackAccent,
    paddingLeft: 16,
    paddingTop: 4,
  },
});

export default MovieResultScreen;
