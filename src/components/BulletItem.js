import React from "react"
import {View, StyleSheet, Text} from "react-native";

const BulletItem = ({children}) => <View style={{flexDirection: 'row'}}>
    <Text>{'\u2022'}</Text>
    <Text style={{flex: 1, paddingLeft: 5}}>{children}</Text>
</View>

export default BulletItem