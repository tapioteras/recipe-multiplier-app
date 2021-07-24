import React, { useEffect, useState } from "react"
import { Button, ScrollView, Text, View } from "react-native"
import { calculatePortion, parseKRuokaRecipe } from "../utils/RecipeUtils"
import { styles } from "./recipes"
import Header from "../components/Header"
import BulletItem from "../components/BulletItem"

const RecipeScreen = ({ route }) => {
  const recipe = parseKRuokaRecipe(route.params.recipe)
  const {
    name,
    portions: initialPortions,
    ingredients,
    steps,
    categories,
  } = recipe
  const [portions, setPortions] = React.useState(initialPortions)
  return (
    <ScrollView style={styles.container}>
      <Header>{name}</Header>
      <View style={{ flexDirection: "row" }}>
        <Text>
          {portions} {portions === 1 ? "annos" : "annosta"}
        </Text>
        <Button onPress={() => setPortions(portions + 1)} title="+" />
        <Button
          onPress={() => setPortions(portions < 2 ? portions : portions - 1)}
          title="-"
        />
        <Button onPress={() => setPortions(initialPortions * 2)} title="x2" />
        <Button onPress={() => setPortions(initialPortions)} title="reset" />
      </View>
      <View style={{ paddingTop: 20 }}>
        <Header>Ainekset</Header>
        {categories
          .sort((a, b) => b.name.localeCompare(a.name))
          .map(({ name: categoryName }, i) => (
            <View key={`category-${i}`}>
              {categories.length > 1 && (
                <Header level={2}>
                  {categoryName == "_" ? "Muut" : categoryName}
                </Header>
              )}
              {[...ingredients]
                .filter(({ category }) => categoryName == category)
                .map(({ amount, ...rest }) => ({
                  ...rest,
                  amount: calculatePortion({
                    amount,
                    originalPortion: initialPortions,
                    multipliedPortion: portions,
                  }),
                }))
                .map(({ name, amount, unit }, i) => (
                  <BulletItem key={`ingredient-${i}`}>
                    {amount} {unit} {name}
                  </BulletItem>
                ))}
            </View>
          ))}
      </View>
      <View style={{ paddingTop: 20 }}>
        <Header>Valmistus</Header>
        {[...steps].map((step, i) => (
          <BulletItem key={`step-${i}`}>
            {i + 1}. {step}
          </BulletItem>
        ))}
      </View>
    </ScrollView>
  )
}

export default RecipeScreen
