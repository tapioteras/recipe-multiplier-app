import React, {useState} from 'react';
import {ActivityIndicator, Button, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import KFoodApi from "../api/KFoodApi";
import SearchResultItem from "../components/SearchResultItem";

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
            <ScrollView style={styles.container}>
                <TextInput value={search} placeholder="kirjoita reseptin nimi..." onChangeText={text => setSearch(text)} />
                <Button onPress={() => KFoodApi.fetchRecipes(search, onSearchProgress, onSearchSuccess, onSearchFail)} title="hae reseptejä" />
                {loadingState === "loading" && <ActivityIndicator />}
                {foundRecipes && loadingState === "loaded" && [...foundRecipes]
                    .map((recipe) => <SearchResultItem onPress={() => navigation.navigate("Recipe", {recipe})}>{recipe.Name}</SearchResultItem>)}
            </ScrollView>
    );
}

export const styles = StyleSheet.create({
    container: {
        padding: 50
    },
});

export default RecipesScreen
