import React from "react"
import { View } from "react-native"
import Header from "./Header"

const Section = ({ header, children, paddingBottom = 10 }) => (
  <View style={{ paddingTop: 20, paddingBottom }}>
    <Header>{header}</Header>
    {children}
  </View>
)

export default Section
