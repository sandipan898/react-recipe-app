import React, { useEffect, useState, useRef } from 'react';
import { Button, Grid, Container, FormControl, Typography, TextField, Select, InputLabel } from '@material-ui/core';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Recipe from './components/Recipe';
import Category from './components/Category';


function App() {

  const [categoryMeals, setCategoryMeals] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken')
  const [category, setCategory] = useState([]);
  const [select, setSelect] = useState();
  const [meals, setMeals] = useState([]);

  // const APP_ID = '33995136';
  // const APP_KEY = '23af0629cc81af56228ee976e60320ed';
  // const API = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
  
  const categoryEl = useRef()
  const amountEl = useRef()

  // useEffect(() => {
  //   getRecipes();
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  useEffect(() => {
     axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res => {
            setCategory(res.data.categories)
            console.log(category)
            getCategoryMeal(res.data.categories[0]);
          }
        )
  }, [])

  const getMeal = async (id) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    setMeals(data);
    console.log(meals);
  }
  
  const handleSearchChange = (e) => {
    setSearch(e.target.value)
    console.log(search)
  }
  
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('')
  }

  const handleSelectChange = (event) => {
    setSelect(event.target.value);
  };

function handleSubmit(e) {
  e.preventDefault()

  axios
      .get('https://opentdb.com/api.php', {
          params: {
              amount: amountEl.current.value,
              category: categoryEl.current.value
          }
      })
  }

  const getCategoryMeal = async (meal) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${meal}`);
    const data = await response.json();
    setCategoryMeals(data);
    console.log(categoryMeals)
    console.log(meals)
  }

  return (
    <div className="App">
      <Header />

      <Container className="">
        <Grid container spacing={8}>
          {category.map(category => {
              return (
                <Grid item xs>
                <Category clickAction={() => getCategoryMeal(category.strCategory)} key={category.idCategory} name={category.strCategory} image={category.strCategoryThumb} />
                </Grid>
              )
          })}
        </Grid>
      </Container>

      {/* <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={handleSearchChange} />
        <button className="search-btn" type="submit">Search</button>
      </form> */}

      <div className="recipes">
      {meals.map(meal => (
        <Recipe
          key={meal.idMeal} 
          title={meal.strMeal}
          image={meal.strMealThumb} 
          clickAction={() => getMeal(meal.idMeal)}
        />
      ))}
      </div>
    </div>
  );
}
export default App;
