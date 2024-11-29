import React, { useState } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import images from '../../assets/images';
import SearchBar from '../../components/SearchBar.component';
import MovieCategoryList from './MovieCategoryList.component';
import { palette } from '../../theme/palette';

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
        clearIcon={images.search}   
      />
      </View>
      {/* Categories Grid */}
     <MovieCategoryList />
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
  searchBarContainer:{
   paddingTop: 8,
   paddingBottom: 28,
   paddingHorizontal: 20,
   backgroundColor: palette.white,
  },
});

export default MovieSearchList;
