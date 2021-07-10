import React, {useEffect, useState} from "react"
import {ScrollView, Text, View} from "react-native";
import {parseKRuokaRecipe} from "../utils/RecipeUtils";
import {styles} from "./recipes";
import Header from "../components/Header";
import BulletItem from "../components/BulletItem";

const RecipeScreen = ({route}) => {
    const recipe = parseKRuokaRecipe(route.params.recipe)
const { name, portions, ingredients, steps } = recipe
    return (<ScrollView style={styles.container}>
<Header>{name}</Header>
        <Text>{portions} annosta</Text>
        <View style={{ paddingTop: 20 }}>
        <Header>Ainekset</Header>
        {[...ingredients]
            .map(({name, amount, unit}) =>
                <BulletItem>{amount} {unit} {name}</BulletItem>)}
        </View>
        <View style={{ paddingTop: 20 }}>
            <Header>Valmistus</Header>
        {[...steps.map((step, i) => <BulletItem>{i + 1}. {step}</BulletItem>)]}
        </View>
    </ScrollView>)
}

export default RecipeScreen