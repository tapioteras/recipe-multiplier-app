import React from "react"
import { Text, View } from "react-native"

const SearchResultItem = (props) => (
  <View
    style={{
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 10,
    }}>
    <Text
      {...props}
      style={{ fontSize: 22, lineHeight: 30, paddingRight: 10, maxWidth: 300 }}
    />
    <View style={{ flex: 1, alignItems: "flex-end" }}>
      <Text style={{ fontSize: 30 }}>{">"}</Text>
    </View>
  </View>
)

export default SearchResultItem
