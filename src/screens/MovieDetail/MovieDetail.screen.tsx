import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import {palette} from '../../theme/palette';
import Text from '../../components/Text.component';
import images from '../../assets/images';
import Chip from '../../components/Chip/Chip.component';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '../../navigation/app.navigator';
import {useGetMovieDetailByIdQuery, useGetMovieVideosByIdQuery} from '../../services/api/movie';
import {formatDate, getRandomColor} from '../../utils';
import {goBack, navigateTo} from '../../navigation/root.navigator';

type MovieDetailProps = NativeStackScreenProps<
  StackParamList,
  'MovieDetailScreen'
>;

const MovieDetailScreen = ({route}: MovieDetailProps) => {
  const movieId = route.params?.movieId;

  const {data, isLoading, isFetching, error} = useGetMovieDetailByIdQuery({
    movieId,
  });
  const {data: movieVideos} = useGetMovieVideosByIdQuery({
    movieId,
  });

  const onBackPress = () => {
    goBack();
  };

  if (isLoading && isFetching) {
    return <Text>Loading...</Text>;
  }

  const {release_date, genres, overview, poster_path} = data ?? {};

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <ImageBackground
        source={{
          uri: `https://image.tmdb.org/t/p/w500${poster_path}`, // Replace with the actual poster image URL
        }}
        style={styles.headerBackground}
        resizeMode="cover">
        <View style={styles.headerContent}>
          <View style={styles.backArrowContainer}>
            <Pressable onPress={onBackPress} hitSlop={20}>
              <Image source={images.backArrow} />
            </Pressable>

            <Text weight="medium" style={styles.watchText}>
              Watch
            </Text>
          </View>

          {release_date && (
            <Text style={styles.subtitle} weight="medium">
              In Theaters {formatDate(release_date)}
            </Text>
          )}

          <Pressable style={styles.getTicketsButton}>
            <Text style={styles.getTicketsText} weight="bold">
              Get Tickets
            </Text>
          </Pressable>

          <Pressable style={styles.trailerButton} onPress={() => navigateTo('TrailerPlayerScreen', { videoKey: movieVideos?.results?.find((video: any) => video.type === 'Trailer' && video.site === 'YouTube')?.key })}>
            <Text style={styles.trailerText} weight="bold">
              ▶ Watch Trailer
            </Text>
          </Pressable>
        </View>
      </ImageBackground>

      {/* Genres Section */}
      <View style={styles.genresContainer}>
        <Text style={styles.sectionTitle} weight="medium">
          Genres
        </Text>
        <View style={styles.genresList}>
          {genres
            ?.map(genre => genre.name)
            .map(genre => (
              <Chip label={genre} color={getRandomColor()} />
            ))}
        </View>
        <View style={styles.divider} />
      </View>

      {/* Overview Section */}
      <View style={styles.overviewContainer}>
        <Text style={styles.sectionTitle} weight="medium">
          Overview
        </Text>
        <Text style={styles.overviewText}>{overview}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.white,
  },
  backArrowContainer: {
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerBackground: {
    width: '100%',
    height: 430,
  },
  headerContent: {
    padding: 20,
  },
  watchText: {
    fontSize: 16,
    color: palette.white,
    paddingLeft: 16,
    paddingTop: 2,
  },
  title: {
    fontSize: 28,
    color: palette.white,
  },
  subtitle: {
    fontSize: 16,
    color: palette.white,
    textAlign: 'center',
    paddingTop: 175,
  },
  getTicketsButton: {
    backgroundColor: palette.primary,
    alignSelf: 'center',
    borderRadius: 10,
    width: 243,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 10,
    fontSize: 14,
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: palette.greyAccent,
    paddingHorizontal: 40,
  },
  getTicketsText: {
    color: palette.white,
  },
  trailerButton: {
    borderWidth: 1,
    borderColor: palette.primary,
    borderRadius: 10,
    width: 243,
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    fontSize: 14,
  },
  trailerText: {
    color: palette.white,
  },
  genresContainer: {
    paddingHorizontal: 40,
    paddingTop: 25,
  },
  sectionTitle: {
    fontSize: 16,
    color: palette.blackAccent,
    marginBottom: 10,
  },
  genresList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
    paddingBottom: 15,
  },
  overviewContainer: {
    paddingHorizontal: 40,
    paddingTop: 15,
    paddingBottom: 20,
  },
  overviewText: {
    fontSize: 12,
    color: palette.grey,
    lineHeight: 20,
  },
});

export default MovieDetailScreen;
