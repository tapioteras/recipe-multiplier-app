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
        .map(({ Name: name, Amount: amount, Unit: unit, category }) => ({ name, amount, unit, category }))
    const {_: portions = 6} = UserPortions
    return {
        name,
        portions,
        categories,
        steps: steps.split("# ").filter(s => !!s),
        ingredients
    }
};

export const divideFraction = (partial) => {
    if (!partial) return 1
    const [a,b]= partial.split("/")
    return a/(!b || b <= 0 ? 1 : b)
}