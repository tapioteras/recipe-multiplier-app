import React, {useEffect, useState} from "react"
import {Text, View} from "react-native";
import {parseKRuokaRecipe} from "../utils/RecipeUtils";
import {styles} from "./recipes";
import Header from "../components/Header";

const RecipeScreen = ({route}) => {
    const recipe = parseKRuokaRecipe(route.params.recipe)
const { name, portions, ingredients, steps } = recipe
    return (<View style={styles.container}>
<Header>{name}</Header>
        <Text>{portions} annosta</Text>
        <View style={{ paddingTop: 20 }}>
        <Header>Ainekset</Header>
        {[...ingredients]
            .map(({name, amount, unit}) =>
                <Text>- {amount} {unit} {name}</Text>)}
        </View>
        <View style={{ paddingTop: 20 }}>
            <Header>Valmistus</Header>
        {[...steps.map((step, i) => <Text>{i + 1}. {step}</Text>)]}
        </View>
    </View>)
}

export default RecipeScreen