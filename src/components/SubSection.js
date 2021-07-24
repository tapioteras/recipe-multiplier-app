import React from "react"
import { View } from "react-native"
import Header from "./Header"

const SubSection = ({ children, header, paddingBottom = 10 }) => (
  <View style={{ paddingVertical: 10, paddingBottom }}>
    <Header level={2}>{header}</Header>
    {children}
  </View>
)
export default SubSection
