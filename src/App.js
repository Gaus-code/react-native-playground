import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import TabsNavigator from './components/TabsNavigator';

import { tabsConfig } from './constants/tabsConfig';

const Tab = createBottomTabNavigator();

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [activeScreen, setActiveScreen] = useState('calendar');

  const handleAddBooking = (newBooking) => {
    setBookings([...bookings, newBooking]);
    setPopupVisible(false);
  };

  return (
    <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer>
          <SafeAreaView style={{ flex: 1 }}>
            <TabsNavigator 
              screens={tabsConfig({
                selectedDate,
                setSelectedDate,
                isPopupVisible,
                setPopupVisible,
                bookings,
                handleAddBooking
              })}
              activeScreen={activeScreen}
              setActiveScreen={setActiveScreen}
            />
          </SafeAreaView>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: 'white',
    height: 60,
  },
  centerButton: {
    top: -20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerButtonInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});

export default App;