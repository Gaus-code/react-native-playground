import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default BottomMenu = ({ activeScreen = 'calendar', setActiveScreen = () => {} }) => {
  return (
    <View style={menuStyles.container}>
      <MaterialIcons 
        name="event" 
        size={24} 
        color={activeScreen === 'calendar' ? '#4DC591' : 'gray'} 
        onPress={() => setActiveScreen('calendar')}
      />
      <MaterialIcons 
        name="work" 
        size={24} 
        color={activeScreen === 'projects' ? '#4DC591' : 'gray'} 
        onPress={() => setActiveScreen('projects')}
      />
      <View style={menuStyles.centerButton}>
        <MaterialIcons 
          name="add-circle" 
          size={40} 
          color="#4DC591" 
          onPress={() => console.log('Create action based on screen')}
        />
      </View>
      <MaterialIcons 
        name="chat" 
        size={24} 
        color={activeScreen === 'chat' ? '#4DC591' : 'gray'} 
        onPress={() => setActiveScreen('chat')}
      />
      <MaterialIcons 
        name="person" 
        size={24} 
        color={activeScreen === 'profile' ? '#4DC591' : 'gray'} 
        onPress={() => setActiveScreen('profile')}
      />
    </View>
  );
};

const menuStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: 'white',
  },
  centerButton: {
    marginTop: -30,
  }
});