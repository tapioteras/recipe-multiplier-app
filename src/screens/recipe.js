import React, { useEffect, useState } from "react"
import { Button, ScrollView, Text, View } from "react-native"
import { calculatePortion, parseKRuokaRecipe } from "../utils/RecipeUtils"
import { styles } from "./recipes"
import Header from "../components/Header"
import BulletItem from "../components/BulletItem"
import Section from "../components/Section"
import SubSection from "../components/SubSection"

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

      <Section header="Ainekset">
        {categories
          .sort((a, b) => b.name.localeCompare(a.name))
          .map(({ name: categoryName }, i) => (
            <SubSection
              header={
                categories.length > 1 && categoryName == "_"
                  ? "Muut"
                  : categoryName
              }
              key={`category-${i}`}>
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
                    {amount && ` ${amount}`}
                    {unit && ` ${unit}`}
                    {name && ` ${name}`}
                  </BulletItem>
                ))}
            </SubSection>
          ))}
      </Section>
      <Section header="Valmistus" paddingBottom={0}>
        {[...steps].map((step, i) => (
          <BulletItem key={`step-${i}`} symbol={`${i + 1}.`} paddingTop={8}>
            {step}
          </BulletItem>
        ))}
      </Section>
    </ScrollView>
  )
}

export default RecipeScreen
