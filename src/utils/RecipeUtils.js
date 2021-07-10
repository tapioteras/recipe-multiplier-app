import _ from "ramda"
export const parseKRuokaRecipe = (
        recipeFromKRuoka
) => {
    const {
        Name: name,
        UserPortions,
        Ingredients,
        Instructions: steps,
    } = recipeFromKRuoka
    const categories = Ingredients
        .filter(({SubSectionHeading}) => SubSectionHeading !== "_")
        .map(({ SubSectionHeading: name }, id) => ({id, name}))
    const ingredients = _.flatten(Ingredients.map(({SubSectionIngredients}) => _.flatten(SubSectionIngredients)))
        .map(({ Name: name, Amount: amount, Unit: unit }) => ({ name, amount, unit }))
    const {_: portions = 6} = UserPortions
    return {
        name,
        portions,
        categories,
        steps: steps.split("# ").filter(s => !!s),
        ingredients
    }
};