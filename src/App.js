import logo from './logo.svg';
import './App.css';

function App() {

  const APP_ID = '33995136';
  const APP_KEY = '23af0629cc81af56228ee976e60320ed';
  const API = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  return (
    <div className="App">
      <h1>Recipe App</h1>
      <form className="search-form">
        <input className="serach-bar" type="text" />
        <button className="search-btn" type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;
