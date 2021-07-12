import React from "react"
import { View, StyleSheet, Text } from "react-native"

const bulletStyle = StyleSheet.create({})
const style = StyleSheet.create({
  fontSize: 18,
  lineHeight: 30,
  flex: 1,
  paddingLeft: 5,
})

const BulletItem = ({ children }) => (
  <View style={{ flexDirection: "row" }}>
    <Text {...{ bulletStyle }}>{"\u2022"}</Text>
    <Text {...{ style }}>{children}</Text>
  </View>
)

export default BulletItem
