import React from 'react'
import { Text } from 'react-native'
import { styles } from '../screens/styleHelper'

function Header(props) {
  return (
    <Text style={styles.headerText}>{props.children}</Text>
  )
}

export default Header
