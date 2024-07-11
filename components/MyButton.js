import React from 'react';
import { Pressable, Text, View } from 'react-native';

const MyButton = ({ onPress, title, disabled }) => (
  <View style={{ margin: 10 }}>
    <Pressable 
      onPress={onPress} 
      disabled={disabled} 
      style={{ backgroundColor: disabled ? '#ccc' : 'blue', margin:10, padding: 10, alignItems: 'center' }}
    >
      <Text style={{ color: 'white',fontWeight:'bold' }}>{title}</Text>
    </Pressable>
  </View>
);

export default MyButton;