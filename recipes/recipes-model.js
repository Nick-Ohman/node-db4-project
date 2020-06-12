const Recipes = require('../data/db-config');

module.exports={
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes(){
    return Recipes('recipes')
}

function getShoppingList (recipe_id){
    return Recipes ('ingredients')
    .where('recipe_id', recipe_id)
    .join('junction as j', "j.ingredient_id", "ingredients.id")
    .join('recipes as r', 'j.recipe_id', 'r.id')
    .select('r.name as Recipe','ingredients.name')

}

function getInstructions (recipe_id){
    return Recipes('steps')
        .where('recipe_id', recipe_id)
        .join('recipes as r', 'steps.recipe_id', '=', 'r.id')

}   