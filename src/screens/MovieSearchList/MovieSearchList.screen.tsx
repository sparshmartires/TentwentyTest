import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import images from '../../assets/images';
import SearchBar from '../../components/SearchBar.component';
import {palette} from '../../theme/palette';
import SearchResultList from './SearchResultList.component';
import MovieCategoryList from './MovieCategoryList.component';

const MovieSearchList: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <SearchBar
          placeholder="TV shows, movies and more"
          value={searchText}
          onChangeText={setSearchText}
          onClear={() => setSearchText('')}
          searchIcon={images.search}
          clearIcon={images.close}
        />
      </View>
      {/* Categories Grid */}
      {searchText?.length > 0 ? (
        <SearchResultList searchText={searchText} />
      ) : (
        <MovieCategoryList />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    marginBottom: 20,
  },
  searchBarContainer: {
    paddingTop: 8,
    paddingBottom: 28,
    paddingHorizontal: 20,
    backgroundColor: palette.white,
  },
});

export default MovieSearchList;
