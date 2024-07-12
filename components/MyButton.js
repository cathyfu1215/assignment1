import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { colors, styles } from '../screens/styleHelper';

const MyButton = ({ onPress, title, disabled }) => (
  <View style={{ margin: 10 }}>
    <Pressable 
      onPress={onPress} 
      disabled={disabled} 
      style={{ backgroundColor: disabled ? colors.grey : colors.blue, margin:10, padding: 10, alignItems: 'center' }}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  </View>
);

export default MyButton;