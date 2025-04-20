import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from '../utils/Icon';

export const ComingSoonScreen = ({ featureName, iconName }) => {
  return (
    <View style={{ 
      flex: 1,
      alignItems: 'center', 
      justifyContent: 'center',
      marginTop: -100 
    }}>
      <Text style={{ 
        padding: 20, 
        textAlign: 'center',
        fontSize: 18,
        color: '#555'
      }}>
        {featureName} - скоро появится
      </Text>
      <Icon 
        name={iconName} 
        size={140} 
        color={'grey'} 
      />
    </View>
  );
};