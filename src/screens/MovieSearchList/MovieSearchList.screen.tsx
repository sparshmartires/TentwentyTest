import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import images from '../../assets/images';
import SearchBar from '../../components/SearchBar.component';
import {palette} from '../../theme/palette';
import SearchResultList from './SearchResultList.component';
import MovieCategoryList from './MovieCategoryList.component';
import { navigateTo } from '../../navigation/root.navigator';
import searchResults from './Results.config';
import {filterResults} from '../../utils';

const MovieSearchList: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  const filteredResults = filterResults(searchResults.movies, searchText);
  
  const onSubmitSearch = () => {
    if(!searchText?.length) return
    navigateTo('MovieResultScreen', {movieIds: filteredResults.map((result)=>result.id) });
  };

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <SearchBar
          placeholder="TV shows, movies and more"
          value={searchText}
          onChangeText={setSearchText}
          onClear={() => setSearchText('')}
          onSubmit={onSubmitSearch}
          searchIcon={images.search}
          clearIcon={images.close}
        />
      </View>
      {/* Categories Grid */}
      {searchText?.length > 0 ? (
        <SearchResultList showHeader filteredResults={filteredResults} />
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
