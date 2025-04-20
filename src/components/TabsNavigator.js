import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Header from './Header';
import SCREEN_TITLES from '../constants/screenTitles';

const Tab = createBottomTabNavigator();

const TabsNavigator = ({ screens, setActiveScreen = () => {} }) => {
  const CustomTabButton = ({ children, onPress }) => (
    <TouchableOpacity style={styles.centerButton} onPress={onPress}>
      <View style={styles.centerButtonInner}>
        {children}
      </View>
    </TouchableOpacity>
  );

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#4DC591',
        tabBarInactiveTintColor: 'gray',
        header: () => <Header title={SCREEN_TITLES[route.name] || SCREEN_TITLES.calendar} />,
      })}
    >
      {screens.map((screen) => (
        <Tab.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          listeners={{
            tabPress: () => {
              setActiveScreen(screen.name);
            },
          }}
          options={
            screen.name === 'add' 
              ? {
                  tabBarButton: (props) => (
                    <CustomTabButton {...props}>
                      <MaterialIcons name="add-circle" size={40} color="#4DC591" />
                    </CustomTabButton>
                  ),
                }
              : {
                  tabBarIcon: ({ color }) => (
                    <MaterialIcons name={screen.icon} size={24} color={color} />
                  ),
                }
          }
        />
      ))}
    </Tab.Navigator>
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

export default TabsNavigator;