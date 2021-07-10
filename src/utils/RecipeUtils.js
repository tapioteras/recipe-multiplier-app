import _ from "ramda"
export const parseKRuokaRecipe = (
        recipeFromKRuoka
) => {
    const {
        Name: name,
        UserPortions: { _: portions },
        Ingredients,
        Instructions,
    } = recipeFromKRuoka
    const categories = Ingredients
        .filter(({SubSectionHeading}) => SubSectionHeading !== "_")
        .map(({ SubSectionHeading: name }, id) => ({id, name}))
    const ingredients = _.flatten(Ingredients.map(({SubSectionIngredients}) => _.flatten(SubSectionIngredients)))
        .map(({ Name: name, Amount: amount, Unit: unit }) => ({ name, amount, unit }))
    return {
        name,
        portions,
        categories,
        Instructions,
        ingredients
    }
};