import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import Header from './components/Header';
import BottomMenu from './components/BottomMenu';
import BookingScreen from './screens/BookingScreen';
import SCREEN_TITLES from './constants/screenTitles';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [activeScreen, setActiveScreen] = useState('calendar');

  const handleAddBooking = (newBooking) => {
    setBookings([...bookings, newBooking]);
    setPopupVisible(false);
  };

  const renderContent = () => {
    switch(activeScreen) {
      case 'projects':
        return <Text style={{ padding: 20 }}>Проекты - скоро появится</Text>;
      case 'chat':
        return <Text style={{ padding: 20 }}>Чат - скоро появится</Text>;
      case 'profile':
        return <Text style={{ padding: 20 }}>Профиль - скоро появится</Text>;
      case 'calendar':
      default:
        return (
          <BookingScreen
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            isPopupVisible={isPopupVisible}
            setPopupVisible={setPopupVisible}
            bookings={bookings}
            handleAddBooking={handleAddBooking}
          />
        );
    }
  };

  return (
    <SafeAreaProvider>
      <PaperProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <Header title={SCREEN_TITLES[activeScreen] || SCREEN_TITLES.calendar} />
          
          <View style={{ flex: 1 }}>
            {renderContent()}
          </View>
          
          <BottomMenu 
            activeScreen={activeScreen} 
            setActiveScreen={setActiveScreen} 
          />
        </SafeAreaView>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;