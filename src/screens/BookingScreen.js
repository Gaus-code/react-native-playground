import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import HorizontalCalendar from '../components/HorizontalCalendar';
import BookingPopup from '../popups/BookingPopup';
import Button from '../elements/Button';


const BookingScreen = ({
    selectedDate,
    setSelectedDate,
    isPopupVisible,
    setPopupVisible,
    bookings,
    handleAddBooking
}) => {
    const selectedDateString = selectedDate ? selectedDate.toISOString().split('T')[0] : null;

  return (
    <>
      <HorizontalCalendar onDateSelect={setSelectedDate} />
      
      {selectedDate && (
        <Button
          title="Забронировать"
          color='#4DC591'
          onPress={() => setPopupVisible(true)}
          style={{
            marginTop: 250,
            borderWidth: 2,
            borderColor: '#FFF',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 5,
          }}
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
          selectedDate={selectedDateString}
          onAddBooking={handleAddBooking}
          onClose={() => setPopupVisible(false)}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  bookingButton: {
    marginTop: 20,
  },
});

export default BookingScreen;