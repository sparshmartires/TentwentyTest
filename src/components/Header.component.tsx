// components/Header.component.tsx

import React from 'react';
import { StyleSheet, View, Pressable, Image } from 'react-native';
import { HeaderProps } from '@components/header';

import Text from './Text.component';
import { palette } from '../theme/palette';
import images from '../assets/images';

const Header: React.FC<HeaderProps> = ({ title, subtitle, onBackPress }) => {
  return (
    <View style={styles.header}>
      <Pressable onPress={onBackPress} hitSlop={40} style={styles.backArrow}>
        <Image source={images.backArrowDark} />
      </Pressable>
      <View style={styles.detailsContainer}>
        <Text style={styles.title} weight="medium">
          {title}
        </Text>
        <Text style={styles.subtitle} weight="medium">
          {subtitle}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 15,
    flexDirection: 'row',
    backgroundColor: palette.white,
  },
  backArrow: {
    paddingTop: 5,
  },
  detailsContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    color: palette.blackAccent,
  },
  subtitle: {
    fontSize: 12,
    textAlign: 'center',
    color: palette.primary,
  },
});

export default Header;
