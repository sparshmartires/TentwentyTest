import { MovieCardProps } from '@api/movie';
import React from 'react';
import { View, Image, StyleSheet, Pressable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { palette } from '../../theme/palette';
import Text from '../../components/Text.component';



const UpcomingMovieCard: React.FC<MovieCardProps> = ({ title, imageUrl, onPress }) => {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <LinearGradient 
        colors={['rgba(0,0,0,0)', '#000000']} 
        style={styles.gradient} 
        start={{ x: 0.5, y: 0 }} 
        end={{ x: 0.5, y: 1 }}
      />
      <View style={styles.overlay}>
        <Text weight='medium' style={styles.title}>{title}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative', 
  },
  image: {
    width: '100%',
    height: 180,
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    height: 70, // Height of the gradient
    width: '100%',
  },
  overlay: {
    position: 'absolute',
    bottom: 10,
    left: 20,
    right: 20,
  },
  title: {
    fontSize: 18,
    color: palette.white,
  },
});

export default UpcomingMovieCard;
