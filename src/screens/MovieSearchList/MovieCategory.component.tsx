import React from 'react';
import {View, Image, StyleSheet, Pressable} from 'react-native';

import Text from '../../components/Text.component';
import {palette} from '../../theme/palette';

interface MovieCategoryProps {
  item: {
    id: number;
    title: string;
    image: any;
  };
}

const MovieCategory: React.FC<MovieCategoryProps> = ({item}) => {
  return (
    <Pressable
      style={[
        styles.categoryCard,
        item.id % 2 === 0
          ? {
              paddingLeft: 10,
            }
          : {
              paddingRight: 0,
            },
      ]}>
      <Image source={item.image} style={styles.categoryImage} />
      <View
        style={[
          styles.overlay,
          item.id % 2 === 0
            ? {
                left: 20,
              }
            : {
                left: 10,
              },
        ]}>
        <Text weight="medium" style={styles.categoryText}>
          {item.title}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  categoryCard: {
    width: '97%',
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  categoryImage: {
    width: '100%',
    borderRadius: 10,
    height: 120,
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    bottom: 10,
  },
  categoryText: {
    color: palette.white,
    fontSize: 16,
  },
});

export default MovieCategory;
