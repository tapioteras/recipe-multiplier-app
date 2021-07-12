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
        {categories.map(({ name: categoryName }) => (
          <View>
            <Header level={2}>{categoryName}</Header>
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
              .map(({ name, amount, unit }) => (
                <BulletItem>
                  {amount} {unit} {name}
                </BulletItem>
              ))}
          </View>
        ))}
      </View>
      <View style={{ paddingTop: 20 }}>
        <Header>Valmistus</Header>
        {[
          ...steps.map((step, i) => (
            <BulletItem>
              {i + 1}. {step}
            </BulletItem>
          )),
        ]}
      </View>
    </ScrollView>
  )
}

export default RecipeScreen
