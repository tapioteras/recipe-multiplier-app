import React, {useEffect, useState} from "react"
import {Text, View} from "react-native";
import {parseKRuokaRecipe} from "../utils/RecipeUtils";

const RecipeScreen = ({route}) => {
    const recipe = parseKRuokaRecipe(route.params.recipe)
const { name, portions, ingredients, steps } = recipe
    return (<View>
<Text>{name}</Text>
        <Text>{portions} annosta</Text>
        <View style={{ paddingTop: 20 }}>
        <Text>Ainekset</Text>
        {[...ingredients]
            .map(({name, amount, unit}) =>
                <Text>- {amount} {unit} {name}</Text>)}
        </View>
        <View style={{ paddingTop: 20 }}>
            <Text>Valmistus</Text>
        {[...steps.map((step, i) => <Text>{i + 1}. {step}</Text>)]}
        </View>
    </View>)
}

export default RecipeScreen