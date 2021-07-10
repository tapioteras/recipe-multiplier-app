import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import KFoodApi from "../api/KFoodApi";

const RecipesScreen = ({navigation}) => {
    const [foundRecipes, setFoundRecipes] = useState()
    const [loadingState, setLoadingState] = useState("initialised")
    const [search, setSearch] = useState("")
    const onSearchProgress = () => {
        setFoundRecipes()
        setLoadingState("loading")
    }
    const onSearchSuccess = ({result = []}) => {
        setLoadingState("loaded")
        setFoundRecipes(result)
    }
    const onSearchFail = () => {
        setLoadingState("failure")
    }
    return (
            <View style={styles.container}>
                {loadingState !== "initialised" && <Text>{loadingState}</Text>}
                <TextInput value={search} placeholder="kirjoita reseptin nimi..." onChangeText={text => setSearch(text)} />
                <Button onPress={() => KFoodApi.fetchRecipes(search, onSearchProgress, onSearchSuccess, onSearchFail)} title="hae reseptejä" />
                {foundRecipes && loadingState === "loaded" && [...foundRecipes]
                    .map((recipe) => <Text onPress={() => navigation.navigate("Recipe", {recipe})}>{recipe.Name}</Text>)}
            </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        padding: 50
    },
});

export default RecipesScreen
