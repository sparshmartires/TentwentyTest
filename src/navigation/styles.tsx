import {StyleSheet} from 'react-native';

import {palette} from '../theme/palette';

const styles = StyleSheet.create({
  tabButton: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  text: {
    textAlign: 'center',
    fontSize: 10,
    color: palette.lightBrown,
  },
  selectedText: {
    color: palette.white,
  },
});

export default styles;
