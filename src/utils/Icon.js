import React from 'react';
import { View, Image } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { iconsMap } from './icon-map';

export const Icon = ({ name, size = 24, color = '#000000' }) => {
    if (!iconsMap[name])
    {
        console.warn(`Icon "${name}" not found in iconsMap`);
        return <View style={{ width: size, height: size, backgroundColor: 'red' }} />;
    }

    const iconSource = iconsMap[name];

    if (typeof iconSource === 'string')
    {
    // SVG
        return (
        <Svg width={size} height={size} viewBox="0 0 24 24">
            <Path d={iconSource} fill={iconColor} />
        </Svg>
        );
    }

  // PNG/JPG
  return (
    <Image 
      source={iconSource}
      style={{ 
        width: size, 
        height: size,
        tintColor: color,
      }}
    />
  );
};