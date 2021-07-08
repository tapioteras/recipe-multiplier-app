import React from "react"
import {Text, View} from "react-native";

const RecipeScreen = ({route, navigation}) => (
    <View>
        <Text>{route.params.name}</Text>
    </View>
)


export default RecipeScreen