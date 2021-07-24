import React from "react"
import { ScrollView, Text, View, Pressable } from "react-native"
import { calculatePortion, parseKRuokaRecipe } from "../utils/RecipeUtils"
import { styles } from "./recipes"
import Header from "../components/Header"
import BulletItem from "../components/BulletItem"
import Section from "../components/Section"
import SubSection from "../components/SubSection"
import RecipeButton from "../components/RecipeButton"

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
      <View>
        <Text>
          {portions} {portions === 1 ? "annos" : "annosta"}
        </Text>
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 10,
            alignContent: "space-around",
          }}>
          <RecipeButton onPress={() => setPortions(portions + 1)} title="+" />
          <RecipeButton
            onPress={() => setPortions(portions < 2 ? portions : portions - 1)}
            title="-"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 10,
            alignContent: "space-around",
          }}>
          <RecipeButton
            onPress={() => setPortions(initialPortions * 2)}
            title="x2"
          />
          <RecipeButton
            onPress={() => setPortions(initialPortions)}
            title="reset"
          />
        </View>
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
      <View style={{ height: 100 }}></View>
    </ScrollView>
  )
}

export default RecipeScreen
