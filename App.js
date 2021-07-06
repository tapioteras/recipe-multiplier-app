import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import KFoodApi from "./src/api/KFoodApi";

export default function App() {
  const [foundRecipes, setFoundRecipes] = useState()
  const [loadingState, setLoadingState] = useState("initialised")
  const [search, setSearch] = useState("")
  const onSearchProgress = () => {
    setFoundRecipes()
    setLoadingState("loading")
  }
  const onSearchSuccess = ({result = []}) => {
    setLoadingState("loaded")
    setFoundRecipes(result.map(({ Name }) => Name))
  }
  const onSearchFail = () => {
    setLoadingState("failure")
  }
  return (
    <View style={styles.container}>
      {loadingState !== "initialised" && <Text>{loadingState}</Text>}
      <TextInput value={search} placeholder="kirjoita reseptin nimi..." onChangeText={text => setSearch(text)} />
      <Button onPress={() => KFoodApi.fetchRecipe(search, onSearchProgress, onSearchSuccess, onSearchFail)} title="hae reseptejä" />
      {foundRecipes && loadingState === "loaded" && [...foundRecipes].map(recipeName => <Text>{recipeName}</Text>)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
});
