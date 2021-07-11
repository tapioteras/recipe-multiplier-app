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
    const ingredients = Ingredients
        .map(({SubSectionIngredients, SubSectionHeading}) => ({data:SubSectionIngredients.flat(), SubSectionHeading}))
        .map(({data, SubSectionHeading: category}) => ({data: data.map(p => ({...p, category}))}))
        .reduce((a,b) => a.concat(b.data), [])
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