import React, { useState } from "react"
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native"
import KFoodApi from "../api/KFoodApi"
import SearchResultItem from "../components/SearchResultItem"
import RecipeButton from "../components/RecipeButton"

const RecipesScreen = ({ navigation }) => {
  const [foundRecipes, setFoundRecipes] = useState()
  const [loadingState, setLoadingState] = useState("initialised")
  const [search, setSearch] = useState("")
  const onSearchProgress = () => {
    setFoundRecipes()
    setLoadingState("loading")
  }
  const onSearchSuccess = ({ result = [] }) => {
    setLoadingState("loaded")
    setFoundRecipes(result)
  }
  const onSearchFail = () => {
    setLoadingState("failure")
  }
  return (
    <ScrollView style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <TextInput
          style={{ flex: 1 }}
          value={search}
          placeholder="kirjoita reseptin nimi..."
          onChangeText={(text) => setSearch(text)}
        />
        {search.length > 0 && (
          <View style={{}}>
            <RecipeButton onPress={() => setSearch("")} title={"x"} />
          </View>
        )}
      </View>
      <View style={{ height: 10 }} />
      <RecipeButton
        onPress={() =>
          KFoodApi.fetchRecipes(
            search,
            onSearchProgress,
            onSearchSuccess,
            onSearchFail
          )
        }
        title="hae reseptejä"
      />
      {loadingState === "loading" && <ActivityIndicator />}
      {foundRecipes && loadingState === "loaded" && (
        <>
          <View style={{ height: 20 }} />
          {[...foundRecipes].map((recipe) => (
            <SearchResultItem
              key={`recipe-row-${recipe.Name}`}
              onPress={() => navigation.navigate("Recipe", { recipe })}>
              {recipe.Name}
            </SearchResultItem>
          ))}
        </>
      )}
    </ScrollView>
  )
}

export const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
})

export default RecipesScreen
