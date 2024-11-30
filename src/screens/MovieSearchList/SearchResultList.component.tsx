import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import {palette} from '../../theme/palette';
import SearchResultItem from './SearchResultItem.component';
import Text from '../../components/Text.component';
import {SearchResult} from '@search';
import { navigateTo } from '../../navigation/root.navigator';

interface SearchResultListProps {
  filteredResults: SearchResult[];
  showHeader: boolean;
}

const SearchResultList: React.FC<SearchResultListProps> = ({
  filteredResults,
  showHeader,
}) => {

  const onSearchResultPress = (item: SearchResult) => {
    if(!showHeader) return
    navigateTo('MovieResultScreen', {movieIds: [item.id] });
  }
  
  return (
    <View style={styles.searchResultContainer}>
      {showHeader && (
        <Text weight="medium" style={styles.text}>
          {filteredResults?.length > 0 ? 'Top Results' : 'No Results'}
        </Text>
      )}
      {showHeader && filteredResults.length > 0 && (
        <View style={styles.divider} />
      )}
      <FlatList
        data={filteredResults}
        renderItem={({item}) => <SearchResultItem {...item}  onPressAction={()=>onSearchResultPress(item)}/>}
        keyExtractor={item => item.title.toString()}
        numColumns={1}
        contentContainerStyle={[
          styles.searchResultList,
          !showHeader && {
            paddingVertical: 0,
          },
        ]}
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
