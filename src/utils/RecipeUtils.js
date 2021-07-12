import _ from "ramda"
export const parseKRuokaRecipe = (recipeFromKRuoka) => {
  const {
    Name: name,
    UserPortions,
    Ingredients,
    Instructions: steps,
  } = recipeFromKRuoka
  const categories = Ingredients.map(({ SubSectionHeading: name }, id) => ({
    id,
    name,
  }))
  const ingredients = Ingredients.map(
    ({ SubSectionIngredients, SubSectionHeading }) => ({
      data: SubSectionIngredients.flat(),
      SubSectionHeading,
    })
  )
    .map(({ data, SubSectionHeading: category }) => ({
      data: data.map((p) => ({ ...p, category })),
    }))
    .reduce((a, b) => a.concat(b.data), [])
    .map(({ Name: name, Amount: amount, Unit: unit, category }) => ({
      name,
      amount: convertAmount(amount),
      unit,
      category,
    }))
  const { _: portions = 6 } = UserPortions
  return {
    name,
    portions,
    categories,
    steps: steps.split("# ").filter((s) => !!s),
    ingredients,
  }
}

export const fractionStrToDecimal = (str = "") =>
  str ? str.split("/").reduce((p, c) => p / c) : 1

export const round = (value) => Math.round(value * 100) / 100

export const calculatePortion = ({
  amount = 0,
  originalPortion = 1,
  multipliedPortion = 1,
}) => {
  const onePortion = amount / originalPortion
  if (originalPortion > multipliedPortion) {
    return round(onePortion * multipliedPortion)
  } else if (originalPortion < multipliedPortion) {
    return round(onePortion * multipliedPortion)
  } else {
    return amount
  }
}

export const convertAmount = (amount = "") => {
  let newAmount = amount

  if (newAmount.includes("n.")) {
    newAmount = newAmount.replace("n.", "").trim()
  }

  if (newAmount.includes("/")) {
    if (newAmount.includes(" ")) {
      newAmount = newAmount
        .split(" ")

        .map((p) => (p.includes("/") ? fractionStrToDecimal(p.trim()) : p))
        .filter((p) => !isNaN(p))
        .reduce((a, b) => parseFloat(a) + parseFloat(b), 0)
    } else {
      newAmount = fractionStrToDecimal(newAmount)
    }
  } else if (newAmount.includes("-")) {
    newAmount = newAmount.split("-")[0]
  } else if (newAmount.includes(",")) {
    newAmount = newAmount.replace(",", ".")
  }

  if (isNaN(newAmount) || !newAmount.toString().length) {
    newAmount = ""
  } else {
    newAmount = parseFloat(newAmount)
  }

  return newAmount
}
