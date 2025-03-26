import React, { useState, useRef, useEffect, useCallback } from 'react';
import { FlatList, Dimensions, View } from 'react-native';
import HorizontalCalendarItem from './HorizontalCalendarItem';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = 60;
const ITEM_MARGIN = 8;
const TOTAL_ITEM_WIDTH = ITEM_WIDTH + ITEM_MARGIN * 2;
const ITEM_HEIGHT = 57;

const HorizontalCalendar = ({ onDateSelect }) => {
  const flatListRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const today = new Date();
    const newDates = [];
    
    for (let i = -50; i <= 50; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() + i);
      newDates.push(date);
    }
    
    setDates(newDates);
    setSelectedDate(today);
  }, []);

  const scrollToDate = useCallback((date) => {
    const index = dates.findIndex(d => d.toDateString() === date.toDateString());
    if (index !== -1 && flatListRef.current) {
      flatListRef.current.scrollToIndex({
        index,
        viewPosition: 0.5,
        animated: true,
      });
    }
  }, [dates]);

  const handleSelectDate = useCallback((date) => {
    setSelectedDate(date);
    scrollToDate(date);
    onDateSelect(date);
  }, [onDateSelect, scrollToDate]);

  useEffect(() => {
    if (selectedDate) {
      setTimeout(() => scrollToDate(selectedDate), 100);
    }
  }, [selectedDate, scrollToDate]);

  const renderItem = useCallback(({ item }) => (
    <HorizontalCalendarItem
      date={item}
      isSelected={selectedDate?.toDateString() === item.toDateString()}
      onPress={() => handleSelectDate(item)}
    />
  ), [selectedDate, handleSelectDate]);

  return (
    <View style={{ 
      height: ITEM_HEIGHT,
      justifyContent: 'center',
    }}>
      <FlatList
        ref={flatListRef}
        data={dates}
        renderItem={renderItem}
        keyExtractor={item => item.toISOString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={TOTAL_ITEM_WIDTH}
        decelerationRate="fast"
        initialNumToRender={10}
        windowSize={21}
        getItemLayout={(_, index) => ({
          length: TOTAL_ITEM_WIDTH,
          offset: TOTAL_ITEM_WIDTH * index,
          index,
        })}
        contentContainerStyle={{
          paddingHorizontal: width / 2 - TOTAL_ITEM_WIDTH / 2,
          alignItems: 'center',
        }}
        style={{
          height: ITEM_HEIGHT,
        }}
      />
    </View>
  );
};

export default React.memo(HorizontalCalendar);