import React, { useEffect, useState, useRef } from 'react';
import { Button, Grid, Container, FormControl, Box, Typography, InputLabel } from '@material-ui/core';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Recipe from './components/Recipe';
import Category from './components/Category';
import Footer from './components/Footer';


function App() {

  const [categoryMeals, setCategoryMeals] = useState([1, 2]);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Chicken');
  const [selectedMeal, setSelectedMeal] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  // const [process, setProcess] = useState('Chicken');
  // const [youtubeLink, setYoutubeLink] = useState([]);
  // const [tags, setTags] = useState([]);

  // const APP_ID = '33995136';
  // const APP_KEY = '23af0629cc81af56228ee976e60320ed';
  // const API = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(res => {
        setCategory(res.data.categories)
        getCategoryMeal(res.data.categories[0].strCategory);
        // console.log(category)
        }
      )
  }, [])

  const makeIngredientsArray = (meal) => {
    console.log("making ingredients")
    const exp = /strIngredient(\d*)/i;
    let pattern = new RegExp(exp);

    const mealItem = Object.keys(meal)
    let ingredients = [];

    for(let i in mealItem) {
      if(pattern.test(mealItem[i]) && meal[mealItem[i]]!=="") {
        ingredients.push(meal[mealItem[i]])
       } 
    }
    setIngredients(ingredients)
  }

  const getMeal = async (id) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    setSelectedMeal(data.meals[0]);
    console.log(selectedMeal)
    // makeIngredientsArray(selectedMeal);
    // console.log(ingredients)
    // console.log(meals.meals[0].strInstructions);
    // setYoutubeLink(meals.strYoutube)
  }

  const getCategoryMeal = async (meal) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${meal}`);
    const data = await response.json();
    setCategoryMeals(data.meals);
    setSelectedCategory(meal);
  }

  return (
    <div className="App">
      <Header />

      <br />
      <hr />
      
      <Typography variant="h4">Recipe Categories</Typography>
      <br />

      <div className="recipes">
        <Grid container xs spacing={1}>
          {category.map(category => {
            return (
              <Grid item xs>
                <Category clickAction={() => getCategoryMeal(category.strCategory)} key={category.idCategory} name={category.strCategory} image={category.strCategoryThumb} />
              </Grid>
            )
          })}
        </Grid>
      </div>

      <br />
      <hr />

      <Typography variant="h4"> {selectedCategory} Recipes</Typography>
      <hr />
      <div className="recipes">
        <Grid container spacing={1}>
          {categoryMeals.map(meal => (
            <Grid item sm>
              <Recipe
                key={meal.idMeal}
                title={meal.strMeal}
                image={meal.strMealThumb}
                clickAction={() => getMeal(meal.idMeal)}
                process={selectedMeal.strInstructions}
                youtubeLink={selectedMeal.strYoutube}
                tags={selectedMeal.strTags}
                ingradiants={ingredients}
              />
            </Grid>
          ))}
        </Grid>
      </div>

      <br />
      <Footer />
    </div>
  );
}
export default App;
