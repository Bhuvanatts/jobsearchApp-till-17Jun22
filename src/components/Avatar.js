import React from 'react'
import { StyleSheet } from 'react-native'
import { Text, Avatar} from 'react-native-paper'

export default function Avatar(props) {
  return <Avatar.Image  source={{
    uri: {...props},
  }}
  size={100} />
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 12,
  },
})
