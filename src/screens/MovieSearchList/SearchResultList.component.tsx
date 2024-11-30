import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import {palette} from '../../theme/palette';
import SearchResult from './SearchResult.component';
import Text from '../../components/Text.component';
import searchResults from './Results.config';
import {filterResults} from '../../utils';

interface SearchResultListProps {
  searchText: string;
}

const SearchResultList: React.FC<SearchResultListProps> = ({searchText}) => {
  const filteredResults = filterResults(searchResults.movies, searchText);

  return (
    <View style={styles.searchResultContainer}>
      <Text weight="medium" style={styles.text}>
        {filteredResults.length > 0 ? 'Top Results' : 'No Results'}
      </Text>
      {filteredResults.length > 0 && <View style={styles.divider} />}
      <FlatList
        data={filteredResults}
        renderItem={({item}) => <SearchResult {...item} />}
        keyExtractor={item => item.title.toString()}
        numColumns={1}
        contentContainerStyle={styles.searchResultList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchResultContainer: {
    paddingHorizontal: 20,
    paddingVertical: 27,
    fontSize: 12,
  },
  text: {
    color: palette.blackAccent,
    paddingBottom: 10,
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#0000001C',
  },
  searchResultList: {
    paddingVertical: 25,
    gap: 10,
  },
});

export default SearchResultList;
