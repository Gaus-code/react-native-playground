import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Icon } from '../utils/Icon';

const Header = ({ title }) => {
    return (
      <View style={styles.container}>
        <Icon name="menu" size={26} color="grey" />
        <Text style={styles.title}>{title}</Text>
        <Icon name="notifications" size={24} color="grey" />
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