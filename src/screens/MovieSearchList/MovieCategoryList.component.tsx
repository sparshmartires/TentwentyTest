import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import MovieCategory from './MovieCategory.component';
import categories from './MovieSearchList.config';
import {palette} from '../../theme/palette';

const MovieCategoryList: React.FC = () => {
  return (
    <FlatList
      data={categories}
      renderItem={({item}) => <MovieCategory item={item} />}
      keyExtractor={item => item.id.toString()}
      numColumns={2}
      contentContainerStyle={styles.categoryList}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  categoryList: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: palette.greyAccent,
    gap: 10,
  },
});

export default MovieCategoryList;
