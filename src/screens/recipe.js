import React, {useEffect, useState} from "react"
import {Text, View} from "react-native";
import {parseKRuokaRecipe} from "../utils/RecipeUtils";

const RecipeScreen = ({route}) => {
    const recipe = parseKRuokaRecipe(route.params.recipe)
const { name } = recipe
    return (<View>
<Text>{name}</Text>
        <Text>{JSON.stringify(recipe)}</Text>
    </View>)
}

export default RecipeScreen