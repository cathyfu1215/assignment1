import React from 'react'
import { Text } from 'react-native'

function Header(props) {
  return (
    <Text style={{color: 'darkblue', fontSize:20, fontWeight:'bold' , margin:5 , padding: 5}}>{props.children}</Text>
  )
}

export default Header
