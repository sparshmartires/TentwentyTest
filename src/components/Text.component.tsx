import React from 'react';
import { Text as RNText, TextProps } from 'react-native';

const Text: React.FC<
  TextProps & { weight?: 'regular' | 'medium' | 'bold' }
> = ({ weight = 'regular', style, ...props }) => {
  let fontFamily = 'Poppins-Regular';
  if (weight === 'medium') fontFamily = 'Poppins-Medium';
  if (weight === 'bold') fontFamily = 'Poppins-SemiBold';

  return <RNText {...props} style={[{ fontFamily }, style]} />;
};

export default Text;
