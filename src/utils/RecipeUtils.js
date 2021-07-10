export const parseKRuokaRecipe = (
        recipeFromKRuoka
) => {
    console.log("recipe from k-ruoka", recipeFromKRuoka)
    const {
        Name: name,
        UserPortions: { _: portions },
        Ingredients,
        Instructions,
    } = recipeFromKRuoka
    const categories = Ingredients.map(({ SubSectionHeading: name }, id) => ({id, name}))

    const ingredients = []
    Ingredients
        .forEach(({
                  SubSectionIngredients: categoryIngredients,
                  SubSectionHeading: categoryHeader }
            ) => {
            const [first] = categoryIngredients
                first.map(({
                          Name: name,
                          Amount: amount,
                          Unit: unit
                      }) => ({
                    name,
                    amount,
                    unit,
                    categoryId: categories.find(({name}) => name === categoryHeader).id
                }))
        })
    return {
        name,
        portions,
        categories,
        Instructions,
        ingredients
    }
};