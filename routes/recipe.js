const express = require ('express');
const { getRecipes, addRecipe, editRecipe, deleteRecipe, getRecipe } = require('../controller/recipe');
const router = express.Router();

router.get("/",getRecipes)  //route to gt all the recepies
router.get("/:id",getRecipe) //get recipe by id
router.post("/",addRecipe) //addig recipe
router.put("/:id",editRecipe) //update recipe
router.delete("/:id",deleteRecipe) //delete recipe


module.exports = router;