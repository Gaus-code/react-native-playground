import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import React from 'react';

const Button = ({ 
  title, 
  onPress, 
  color = '#5DBE7E', 
  textColor = 'white',
  disabled = false,
  style = {},
}) => (
  <TouchableOpacity
    onPress={onPress}
    disabled={disabled}
    style={[
        styles.button,
        { backgroundColor: color },
        disabled && styles.disabled,
        style
    ]}
    activeOpacity={0.7}
  >
    <Text style={[styles.text, { color: textColor }]}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    minWidth: 120,
  },
  disabled: {
    opacity: 0.6,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Button;