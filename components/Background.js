import React from 'react'
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, styles } from '../screens/styleHelper'



function Background(props) {
    /*I learned this from my classmate, David. */
  return (
    <LinearGradient style={styles.backgroundContainer} colors={[colors.lightpink, colors.lightblue]}>
        {props.children}
    </LinearGradient>
  )
}


export default Background
