import React from 'react'
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';



function Background(props) {
    /*I learned this from my classmate, David. */
  return (
    <LinearGradient style={styles.container} colors={['pink', 'lightblue']}>
        {props.children}
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

export default Background
