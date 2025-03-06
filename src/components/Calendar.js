import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars';

export default function CalendarComponent() {
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <Calendar
      onDayPress={(day) => {
        setSelectedDate(day.dateString);
      }}
      markedDates={{
        [selectedDate]: { selected: true, selectedColor: 'blue' }
      }}
    />
  );
}