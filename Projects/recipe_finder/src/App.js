import React, { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from './firebase/firebase';
import Login from "./Login";
import Header from "./components/header";
import Home from "./Home";
// import AddComment from './AddComment';
import RecipeDetails from "./RecipeDetails";
import AddRecipe from "./AddRecipe";
import { AuthProvider, useAuth } from "./contexts/authContext";
import '@fortawesome/fontawesome-free/css/all.min.css';

function AppContent() {
  const [recipes, setRecipes] = useState([]);
  const { currentUser } = useAuth(); // Get currentUser from useAuth

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const recipeCollection = await getDocs(collection(firestore, 'recipes'));
        setRecipes(recipeCollection.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } catch (error) {
        console.error('Error fetching recipes: ', error);
      }
    };

    fetchRecipes();
  }, []);

  const routesArray = [
    {
      path: "*",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/home",
      element: <Home recipes={recipes} currentUser={currentUser} />,
    },
    {
      path: "/recipe/:recipeName",
      element: <RecipeDetails recipes={recipes} currentUser={currentUser} />,
    },
    {
      path: "/add-recipe",
      element: <AddRecipe currentUser={currentUser} />,
    },
    // {
    //   path:"/recipe/:recipeName/newcommentId",
    //   element: <AddComment recipes={recipes} currentUser={currentUser} />,
    // },
  ];
  let routesElement = useRoutes(routesArray);

  return (
    <>
      <Header />
      <div className="w-full h-screen flex flex-col">
        {routesElement}
      </div>
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
