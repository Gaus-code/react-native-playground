import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Header = ({ title }) => {
    return (
      <View style={styles.container}>
        <MaterialIcons name="menu" size={24} color="black" />
        <Text style={styles.title}>{title}</Text>
        <MaterialIcons name="notifications" size={24} color="black" />
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default Header;