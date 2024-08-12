import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { firestore } from './firebase/firebase';
import AddComment from './AddComment';
import './App.css';

function RecipeDetails({ recipes, currentUser }) {
  const { recipeName } = useParams();
  const navigate = useNavigate();
  const [comments, setComments] = useState([]);
  const recipe = recipes.find((recipe) => recipe.title === recipeName);


  const handleNavigate = () => {
    navigate(`/comments/${recipe.title}/newcommentId`);
  };

  useEffect(() => {
    if (recipe) {
      fetchComments(recipe.title);
    }
  }, [recipe]);

  const fetchComments = async (recipeId) => {
    const q = query(collection(firestore, 'comments'), where('recipeId', '==', recipeId));
    const querySnapshot = await getDocs(q);
    const commentsData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setComments(commentsData);
  };

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div id="app">
      <button className="back-button" onClick={() => navigate('/')}>
        <i className="fas fa-arrow-left"></i>
      </button>
      <div id="recipe-details" className="recipe">
        <h1>{recipe.title}</h1>
        <p><strong>Ingredients:</strong></p>
        <ul className="ingredients">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient.quantity} of {ingredient.ingredient}</li>
          ))}
        </ul>
        <p><strong>Methods:</strong></p>
        <div className="instructions">
          {recipe.methods.map((method, index) => (
            <p key={index}>{method.description}</p>
          ))}
        </div>

        
      </div>
      <div>
      <button onClick={handleNavigate} className="comment-icon-button">
      <i className="fas fa-comments"></i>
    </button>
          <h3>Comments</h3>
          {comments.map((comment) => (
            <div key={comment.id}>
              <p>{comment.comment}</p>
              <small>By {comment.userName} on {comment.createdAt.toDate().toDateString()}</small>
            </div>
          ))}
        </div>
    </div>
  );
}

export default RecipeDetails;
