import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';

function Home({ recipes, currentUser }) {
  const [recipesMade, setRecipesMade] = useState([]);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');
  const [filterType, setFilterType] = useState('all'); // Default filter
  const navigate = useNavigate();

  useEffect(() => {
    const madeRecipes = JSON.parse(localStorage.getItem('recipesMade')) || [];
    setRecipesMade(madeRecipes);
  }, []);

  const toggleLikeAndMarkRecipe = (recipeName) => {
    let updatedRecipes;
    if (!recipesMade.includes(recipeName)) {
      updatedRecipes = [...recipesMade, recipeName];
      showAlert('Recipe liked!', 'success');
    } else {
      updatedRecipes = recipesMade.filter(recipe => recipe !== recipeName);
      showAlert('Recipe unliked.', 'success');
    }

    setRecipesMade(updatedRecipes);
    localStorage.setItem('recipesMade', JSON.stringify(updatedRecipes));
  };

  const showAlert = (message, type) => {
    setAlertMessage(message);
    setAlertType(type);
    setTimeout(() => {
      setAlertMessage('');
    }, 3000);
  };

  const handleFilterChange = (type) => {
    setFilterType(type);
  };

  const filterRecipes = (recipe) => {
    if (filterType === 'all') {
      return true;
    } else if (filterType === 'made') {
      return recipesMade.includes(recipe.title);
    } else if (filterType === 'notmade') {
      return !recipesMade.includes(recipe.title);
    } else if (filterType === 'mine') {
      return recipe.createdBy === (currentUser?.email || currentUser?.displayName);
    }
    return true;
  };
  return (
    <div id="app">
      <div className="text-2xl font-bold pt-14">
        {currentUser ? (currentUser.displayName || currentUser.email) : 'Guest'}
      </div>
      <h1>Pasta Recipe Finder</h1>
      <div id="filter">
        <label>Filter Recipes:</label>
        <div>
          <button id="all" className={filterType === 'all' ? 'active' : ''} onClick={() => handleFilterChange('all')}>All</button>
          <button id="liked" className={filterType === 'made' ? 'active' : ''} onClick={() => handleFilterChange('made')}>Liked</button>
          {/* <button id="mine" className={filterType === 'mine' ? 'active' : ''} onClick={() => handleFilterChange('mine')}>My Recipes</button> */}
          <Link to="/add-recipe">
          <button  className="add-recipe-button">
            <i className="fas fa-plus"></i>
          </button>
        </Link>
        </div>
      </div>
      <div id="recipe-cards">
        {recipes.filter(recipe => filterRecipes(recipe)).map(recipe => (
          <div key={recipe.id} className="recipe-card">
            <Link to={`/recipe/${recipe.title}`}>
              <div className="recipe-header">
                {/* <img src={recipe.imageUrl || 'path/to/default/profile/pic.jpg'} alt={recipe.title} className="profile-pic" /> */}
                <div>
                  <h3>{recipe.title}</h3>
                  <p>Created by: {recipe.createdBy || 'Unknown'}</p>
                </div>
              </div>
            </Link>
            <button
              className={`like-button ${recipesMade.includes(recipe.title) ? 'liked' : 'default'}`}
              onClick={(e) => {
                e.stopPropagation();
                toggleLikeAndMarkRecipe(recipe.title);
              }}
            >
              <i className="fas fa-thumbs-up"></i>
            </button>
          </div>
        ))}
      </div>
      {alertMessage && (
        <div className={`alert ${alertType}`}>{alertMessage}</div>
      )}
    </div>
  );
}

export default Home;
