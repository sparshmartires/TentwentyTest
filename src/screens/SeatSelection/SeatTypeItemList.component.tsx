import { SeatType } from '@seat';
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import Text from '../../components/Text.component';

interface SeatItemTypeProps {
  SeatItemTypes: SeatType[];
}

const SeatTypeItemList: React.FC<SeatItemTypeProps> = ({ SeatItemTypes }) => {
  return (
    <View style={styles.container}>
      {SeatItemTypes.map((item, index) => (
        <View key={index} style={styles.item}>
          <Image source={item.image} style={styles.icon} />
          <Text style={styles.label}>{item.name}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
    borderRadius: 4,
  },
  label: {
    fontSize: 14,
    color: '#6c757d',
  },
});

export default SeatTypeItemList;
