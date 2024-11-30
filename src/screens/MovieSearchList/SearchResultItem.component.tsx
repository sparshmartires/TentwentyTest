import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
  Pressable,
} from 'react-native';

import Text from '../../components/Text.component';
import images from '../../assets/images';
import {palette} from '../../theme/palette';

interface MovieListItemProps {
  imageUrl: ImageSourcePropType;
  title: string;
  overview: string;
  onPressAction?: () => void;
}

const SearchResultItem: React.FC<MovieListItemProps> = ({
  imageUrl,
  title,
  overview,
  onPressAction,
}) => {
  return (
    <Pressable style={styles.container} onPress={onPressAction}>
      {/* Image */}
      <Image source={imageUrl} style={styles.image} />

      {/* Text Content */}
      <View style={styles.textContainer}>
        <Text weight="medium" style={styles.title}>
          {title}
        </Text>
        <Text weight="medium" style={styles.genre}>
          {overview}
        </Text>
      </View>
      {/* Action (Three Dots) */}
      <Image source={images.more} style={styles.more} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 10,
  },
  image: {
    width: 130,
    height: 100,
    borderRadius: 8,
  },
  more: {
    width: 20,
    height: 4,
  },
  textContainer: {
    flex: 1,
    marginLeft: 20,
  },
  title: {
    fontSize: 16,
    color: palette.blackAccent,
  },
  genre: {
    fontSize: 12,
    color: palette.greyAccent1,
  },
});

export default SearchResultItem;
