import React, { useState } from 'react';
import {
  View,
  TextInput,
  Pressable,
  StyleSheet,
  TextInputProps,
  Image,
  ImageSourcePropType,
  Keyboard,
} from 'react-native';

import { palette } from '../theme/palette';

interface SearchBarProps extends TextInputProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onClear?: () => void;
  containerStyle?: object;
  inputStyle?: object;
  onSubmit?: (text: string) => void;
  searchIcon?: ImageSourcePropType;
  clearIcon?: ImageSourcePropType;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Search...',
  value = '',
  onChangeText,
  onClear,
  onSubmit,
  containerStyle,
  inputStyle,
  searchIcon,
  clearIcon,
  ...props
}) => {
  const [text, setText] = useState(value);

  const handleTextChange = (input: string) => {
    setText(input.trim());
    if (onChangeText) {
      onChangeText(input.trim());
    }
  };

  const handleClear = () => {
    setText('');
    if (onClear) {
      onClear();
    }
  };
  const handleSubmitEditing = () => {
    if (onSubmit) {
      onSubmit(text); // Trigger the onSubmit callback with the current text
    }
    Keyboard.dismiss(); // Optionally dismiss the keyboard after submission
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {/* Search Icon */}
      {searchIcon && <Image source={searchIcon} style={styles.icon} />}
      {/* Text Input */}
      <TextInput
        style={[styles.input, inputStyle]}
        placeholder={placeholder}
        value={text}
        onSubmitEditing={handleSubmitEditing}
        onChangeText={handleTextChange}
        {...props}
      />
      {/* Clear Icon */}
      {text.length > 0 && clearIcon && (
        <Pressable
          onPress={handleClear}
          style={styles.clearButton}
          hitSlop={20}>
          <Image source={clearIcon} style={styles.icon} />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: palette.greyAccent,
    borderRadius: 30,
    paddingHorizontal: 16,
    height: 52,
  },
  icon: {
    width: 15,
    height: 15,
    paddingRight: 16,
  },
  input: {
    flex: 1,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: palette.blackAccent,
    paddingLeft: 16,
  },
  clearButton: {
    marginLeft: 8,
  },
});

export default SearchBar;
