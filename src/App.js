import React, { useEffect, useState } from 'react';
// import { TextField } from "material-ui/core";
import './App.css';
import Header from './components/Header';
import Recipe from './components/Recipe';
function App() {
  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken')
  
  const APP_ID = '33995136';
  const APP_KEY = '23af0629cc81af56228ee976e60320ed';
  const API = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
  
  useEffect(() => {
    getRecipes();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  const getRecipes = async () => {
    const response = await fetch(API);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data);
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

  return (
    <div className="App">
      <Header />
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={handleSearchChange} />
        <button className="search-btn" type="submit">Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.title} 
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image} 
          ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
}
export default App;
