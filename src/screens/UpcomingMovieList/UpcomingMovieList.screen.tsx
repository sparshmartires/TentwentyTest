import { MovieCardProps } from '@api/movie';
import React, {useState, useCallback, useEffect} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Image,
  Pressable,
} from 'react-native';

import images from '../../assets/images';
import UpcomingMovieCard from './UpcomingMovieCard.component';
import {palette} from '../../theme/palette';
import {useGetUpcomingMoviesQuery} from '../../services/api/movie';
import Text from '../../components/Text.component';
import {navigateTo} from '../../navigation/root.navigator';


const UpcomingMovieListScreen: React.FC = () => {
  // Pagination state
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<MovieCardProps[]>([]);
  const [isEndReached, setIsEndReached] = useState(false); // To prevent multiple triggers

  // Fetch movies using RTK query
  const {data, isLoading, isFetching, isError} = useGetUpcomingMoviesQuery(
    {page},
    {skip: false}, // Always fetch for the given page
  );

  // Update the movie list when new data is fetched
  useEffect(() => {
    if (data && data.results) {
      const newMovies = data.results.map(movie => ({
        id: movie.id,
        title: movie.title,
        imageUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      }));

      setMovies(prevMovies => [...prevMovies, ...newMovies]); // Append new movies
    }
  }, [data]);

  // Handle loading the next page
  const loadMoreMovies = useCallback(() => {
    if (!isFetching && !isEndReached && !isError) {
      setIsEndReached(true); // Prevent multiple calls
      setPage(prevPage => prevPage + 1);
      setTimeout(() => setIsEndReached(false), 500); // Allow new calls after a delay
    }
  }, [isFetching, isEndReached, isError]);

  const handleSearchPress = () => {
    navigateTo('MovieSearchList');
  };

  const onUpcomingMovieCardPress = (movieId: number) => {
    navigateTo('MovieDetailScreen', {movieId});
  };

  return (
    <View style={styles.upcomingMovieContainer}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text weight="medium" style={styles.header}>
          Watch
        </Text>
        <Pressable
        hitSlop={20}
          style={styles.headerImageContainer}
          onPress={handleSearchPress}>
          <Image source={images.search} />
        </Pressable>
      </View>

      {/* Movie List */}
      {isLoading && page === 1 ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={movies}
          renderItem={({item}) => (
            <UpcomingMovieCard
              {...item}
              onPress={() => onUpcomingMovieCardPress(item.id)}
            />
          )}
          keyExtractor={item => item.title.toString()}
          contentContainerStyle={styles.movieListContainer}
          showsVerticalScrollIndicator={false}
          onEndReached={loadMoreMovies}
          onEndReachedThreshold={0.5} // Adjusted to avoid multiple calls
          ListFooterComponent={
            isFetching ? (
              <ActivityIndicator size="small" color="#0000ff" />
            ) : null
          }
        />
      )}
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  upcomingMovieContainer: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#202C43',
  },
  headerContainer: {
    paddingVertical: 23.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: palette.white,
  },
  headerImageContainer: {
    paddingRight: 20,
  },
  movieListContainer: {
    backgroundColor: palette.greyAccent,
    gap: 20,
    paddingBottom: 20,
    paddingTop: 27,
    paddingHorizontal: 20,
  },
});

export default UpcomingMovieListScreen;
