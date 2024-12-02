import React from 'react';
import {Pressable, StyleSheet, ViewStyle, TextStyle} from 'react-native';

import {palette} from '../theme/palette';
import Text from './Text.component';

interface ButtonProps {
  type: 'primary' | 'secondary';
  label: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const Button: React.FC<ButtonProps> = ({
  type,
  label,
  onPress,
  style,
  textStyle,
}) => {
  // Determine styles based on button type
  const buttonStyle =
    type === 'primary' ? styles.primaryButton : styles.secondaryButton;
  const textStyleType =
    type === 'primary' ? styles.primaryText : styles.secondaryText;

  return (
    <Pressable
      style={[styles.baseButton, buttonStyle, style]} // Base + dynamic + custom styles
      onPress={onPress}>
      <Text style={[styles.baseText, textStyleType, textStyle]}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  baseButton: {
    borderRadius: 10,
    width: 243,
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
  primaryButton: {
    backgroundColor: palette.primary,
    marginBottom: 10,
    marginTop: 8,
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: palette.primary,
    backgroundColor: 'transparent',
  },
  baseText: {
    fontSize: 14,
  },
  primaryText: {
    color: palette.white,
  },
  secondaryText: {
    color: palette.white,
  },
});

export default Button;
