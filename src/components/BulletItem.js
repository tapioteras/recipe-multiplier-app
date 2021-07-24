import React from "react"
import { View, Text } from "react-native"

const BulletItem = ({ children, symbol = "\u2022", paddingTop = 5 }) => (
  <View style={{ flexDirection: "row" }}>
    <View style={{ paddingTop }}>
      <Text style={{ fontSize: 17 }}>{symbol}</Text>
    </View>
    <Text
      style={{
        fontSize: 18,
        lineHeight: 35,
        flex: 1,
        paddingLeft: 7,
      }}>
      {children}
    </Text>
  </View>
)

export default BulletItem
