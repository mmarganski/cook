export type ApiResponseRecipe = {
    id: number,
    title: string,
    image: string,
    imageType: string,
    usedIngredientCount: number,
    missedIngredientCount: number
}

export type ApiRecipeDetails = {
    analyzedInstructions: Array<Record<number, string>>,
    image: string,
    imageType: string,
    instructions: string,
    readyInMinutes: number,
    sourceUrl: string,
    title: string
}
