import React, { useEffect, useState, useRef } from 'react';
import { Button, Grid, Container, FormControl, Box, Typography, InputLabel } from '@material-ui/core';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Recipe from './components/Recipe';
import Category from './components/Category';


function App() {

  const [categoryMeals, setCategoryMeals] = useState([1, 2]);
  const [category, setCategory] = useState([]);
  const [selected, setSelected] = useState('Chicken');
  const [meals, setMeals] = useState([]);

  // const APP_ID = '33995136';
  // const APP_KEY = '23af0629cc81af56228ee976e60320ed';
  // const API = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
  
  const categoryEl = useRef()
  const amountEl = useRef()

  useEffect(() => {
     axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res => {
            setCategory(res.data.categories)
            console.log(category)
            getCategoryMeal(res.data.categories[0].strCategory);
          }
        )
  }, [])

  const getMeal = async (id) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    setMeals(data);
    console.log(meals);
  }
  
  const getCategoryMeal = async (meal) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${meal}`);
    const data = await response.json();
    setCategoryMeals(data.meals);
    console.log(categoryMeals)
    // console.log(meals)
  }

  return (
    <div className="App">
      <Header />

      <br />
      <hr />
      
      <Typography variant="h3">Recipe Categories</Typography>

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
      
      <Typography variant="h3"> {selected} Recipies</Typography>
      <div className="recipes">
      <Grid container spacing={1}>
      {categoryMeals.map(meal => (
        <Grid item xs>
        <Recipe
          key={meal.idMeal} 
          title={meal.strMeal}
          image={meal.strMealThumb} 
          clickAction={() => getMeal(meal.idMeal)}
          process={meal.process}
        />
        </Grid>
      ))}
      </Grid>
      </div>
    </div>
  );
}
export default App;
