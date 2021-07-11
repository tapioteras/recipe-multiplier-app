import React from "react"
import {Text} from "react-native";

const Header = ({children, level}) =>
    <Text style={{paddingTop: 5, paddingBottom: 10, fontSize: level === 2 ? 25 : 32 }}>{children}</Text>

export default Header