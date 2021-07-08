import React from "react"
import {Text, View} from "react-native";

const RecipeScreen = ({route, navigation}) => {
    const { Name, Url } = route.params.recipe



    return <View>
        <Text>{Name}, {Url}</Text>
    </View>
}



export default RecipeScreen