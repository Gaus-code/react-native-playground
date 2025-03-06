import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Provider as PaperProvider } from 'react-native-paper';
import BookingPopup from './popups/BookingPopup';

export default function App() {
  const [bookings, setBookings] = useState([]);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  const handleAddBooking = (newBooking) => {
    setBookings([...bookings, newBooking]);
    setPopupVisible(false);
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text style={styles.title}>Календарь бронирований</Text>

        <Calendar
          style={styles.calendar}
          theme={{
            todayTextColor: 'blue',
            selectedDayBackgroundColor: 'green',
          }}
          onDayPress={handleDayPress}
          markedDates={{
            [selectedDate]: { selected: true, selectedColor: 'green' },
          }}
        />

        {selectedDate && (
          <Button
            title="Забронировать"
            onPress={() => setPopupVisible(true)}
          />
        )}

        <ScrollView style={styles.bookingsList}>
          {bookings.map((booking, index) => (
            <View key={index} style={styles.bookingItem}>
              <Text>Комната: {booking.room}</Text>
              <Text>Дата: {booking.date}</Text>
              <Text>Время: {booking.time}</Text>
            </View>
          ))}
        </ScrollView>

        {isPopupVisible && (
          <BookingPopup
            selectedDate={selectedDate}
            onAddBooking={handleAddBooking}
            onClose={() => setPopupVisible(false)}
          />
        )}
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  calendar: {
    marginBottom: 20,
  },
  bookingsList: {
    marginTop: 20,
  },
  bookingItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});