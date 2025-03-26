import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const HorizontalCalendarItem = ({ 
  date, 
  isSelected, 
  onPress 
}) => {
  const day = date.getDate();
  const weekday = date.toLocaleString('default', { weekday: 'short' }).toUpperCase();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        isSelected && styles.selected
      ]}
      activeOpacity={0.7}
    >
      <Text style={[
        styles.weekday,
        isSelected && styles.selectedText
      ]}>
        {weekday}
      </Text>
      <Text style={[
        styles.day,
        isSelected && styles.selectedText
      ]}>
        {day}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 57,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
    borderRadius: 10,
  },
  selected: {
    backgroundColor: '#FF7648',
  },
  weekday: {
    fontSize: 12,
    color: '#BCC1CD',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  day: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#212525',
  },
  selectedText: {
    color: '#FFFFFF',
  },
});

export default React.memo(HorizontalCalendarItem);