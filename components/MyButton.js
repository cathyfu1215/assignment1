import React from 'react';
import { Pressable, Text, View } from 'react-native';

const MyButton = ({ onPress, title, disabled }) => (
  <View style={{ margin: 10 }}>
    <Pressable 
      onPress={onPress} 
      disabled={disabled} 
      style={{ backgroundColor: disabled ? '#ccc' : '#841584', padding: 10, alignItems: 'center' }}
    >
      <Text style={{ color: 'white' }}>{title}</Text>
    </Pressable>
  </View>
);

export default MyButton;